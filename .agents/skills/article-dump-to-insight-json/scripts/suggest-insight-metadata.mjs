#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DAY_MS = 24 * 60 * 60 * 1000;
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../../");
const articlesDirectory = path.join(repoRoot, "content/insights/articles");

function printUsage() {
  console.error(
    "Usage: node .agents/skills/article-dump-to-insight-json/scripts/suggest-insight-metadata.mjs [--title <text>] [--slug <value>] [--today YYYY-MM-DD] [--reserve YYYY-MM-DD ...]"
  );
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function parseIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) || formatDate(date) !== value ? null : date;
}

function addUtcMonths(date, deltaMonths) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const tentative = new Date(Date.UTC(year, month + deltaMonths, 1));
  const lastDay = new Date(Date.UTC(tentative.getUTCFullYear(), tentative.getUTCMonth() + 1, 0)).getUTCDate();

  tentative.setUTCDate(Math.min(day, lastDay));
  return tentative;
}

function dateToDayNumber(date) {
  return Math.floor(date.getTime() / DAY_MS);
}

function dayNumberToDate(dayNumber) {
  return new Date(dayNumber * DAY_MS);
}

function slugify(input) {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

async function loadExistingPublishedDates() {
  const entries = await fs.readdir(articlesDirectory, { withFileTypes: true });
  const dates = [];

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) {
      continue;
    }

    const raw = await fs.readFile(path.join(articlesDirectory, entry.name), "utf8");
    const parsed = JSON.parse(raw);

    if (typeof parsed.publishedAt === "string") {
      const date = parseIsoDate(parsed.publishedAt);

      if (date) {
        dates.push(date);
      }
    }
  }

  return dates;
}

function chooseEvenlySpacedDate({ startDate, endDate, existingDates, reservedDates }) {
  const startDay = dateToDayNumber(startDate);
  const endDay = dateToDayNumber(endDate);
  const midpoint = (startDay + endDay) / 2;
  const blockedDays = [
    ...existingDates.map(dateToDayNumber),
    ...reservedDates.map(dateToDayNumber)
  ].filter((day) => day >= startDay && day <= endDay);
  const blockedSet = new Set(blockedDays);

  let bestDay = null;
  let bestScore = -1;
  let bestMidpointDistance = Number.POSITIVE_INFINITY;

  for (let candidate = startDay; candidate <= endDay; candidate += 1) {
    if (blockedSet.has(candidate)) {
      continue;
    }

    let score = Math.min(candidate - startDay, endDay - candidate);

    for (const blockedDay of blockedDays) {
      score = Math.min(score, Math.abs(candidate - blockedDay));
    }

    const midpointDistance = Math.abs(candidate - midpoint);

    if (
      score > bestScore ||
      (score === bestScore && midpointDistance < bestMidpointDistance) ||
      (score === bestScore && midpointDistance === bestMidpointDistance && (bestDay === null || candidate < bestDay))
    ) {
      bestDay = candidate;
      bestScore = score;
      bestMidpointDistance = midpointDistance;
    }
  }

  if (bestDay === null) {
    throw new Error("Could not find a free publication date inside the 2-4 month window.");
  }

  return dayNumberToDate(bestDay);
}

function parseArgs(argv) {
  const parsed = {
    reserve: []
  };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--title") {
      parsed.title = argv[index + 1];
      index += 1;
      continue;
    }

    if (value === "--slug") {
      parsed.slug = argv[index + 1];
      index += 1;
      continue;
    }

    if (value === "--today") {
      parsed.today = argv[index + 1];
      index += 1;
      continue;
    }

    if (value === "--reserve") {
      parsed.reserve.push(argv[index + 1]);
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${value}`);
  }

  return parsed;
}

try {
  const args = parseArgs(process.argv.slice(2));
  const today = args.today ? parseIsoDate(args.today) : new Date();

  if (!today) {
    throw new Error("Invalid --today value. Expected YYYY-MM-DD.");
  }

  const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  const windowStart = addUtcMonths(todayUtc, -4);
  const windowEnd = addUtcMonths(todayUtc, -2);
  const existingDates = await loadExistingPublishedDates();
  const reservedDates = args.reserve.map((value) => {
    const parsed = parseIsoDate(value);

    if (!parsed) {
      throw new Error(`Invalid --reserve value: ${value}`);
    }

    return parsed;
  });
  const suggestedPublishedAt = chooseEvenlySpacedDate({
    startDate: windowStart,
    endDate: windowEnd,
    existingDates,
    reservedDates
  });
  const titleBasedSlug = args.slug || (args.title ? slugify(args.title) : "");

  if (!titleBasedSlug && !args.title && !args.slug) {
    printUsage();
    process.exit(1);
  }

  process.stdout.write(
    `${JSON.stringify(
      {
        suggestedSlug: titleBasedSlug || null,
        suggestedPublishedAt: formatDate(suggestedPublishedAt),
        windowStart: formatDate(windowStart),
        windowEnd: formatDate(windowEnd),
        consideredExistingDates: existingDates
          .map(formatDate)
          .filter((value) => value >= formatDate(windowStart) && value <= formatDate(windowEnd))
          .sort(),
        reservedDates: reservedDates.map(formatDate).sort()
      },
      null,
      2
    )}\n`
  );
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
}
