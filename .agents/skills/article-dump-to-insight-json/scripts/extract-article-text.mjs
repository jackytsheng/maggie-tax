#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const TEXT_EXTENSIONS = new Set([
  ".txt",
  ".md",
  ".markdown",
  ".text",
  ".csv",
  ".json"
]);

const TEXTUTIL_EXTENSIONS = new Set([
  ".doc",
  ".docx",
  ".rtf",
  ".odt",
  ".html",
  ".htm",
  ".webarchive"
]);

function printUsage() {
  console.error("Usage: node .agents/skills/article-dump-to-insight-json/scripts/extract-article-text.mjs <file>");
}

function normalizeText(text) {
  return text
    .replace(/\u0000/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractWithTextutil(filePath) {
  const result = spawnSync("/usr/bin/textutil", ["-convert", "txt", "-stdout", filePath], {
    encoding: "utf8"
  });

  if (result.status !== 0) {
    const stderr = result.stderr?.trim();
    throw new Error(stderr || `textutil failed for ${filePath}`);
  }

  return result.stdout ?? "";
}

async function loadPdfjs() {
  try {
    return await import("pdfjs-dist/legacy/build/pdf.mjs");
  } catch (localError) {
    const bundledModules = process.env.CODEX_BUNDLED_NODE_MODULES;

    if (!bundledModules) {
      throw new Error(
        "PDF extraction requires pdfjs-dist. Call load_workspace_dependencies first and rerun with CODEX_BUNDLED_NODE_MODULES set to the bundled node_modules path."
      );
    }

    const modulePath = path.join(bundledModules, "pdfjs-dist/legacy/build/pdf.mjs");

    try {
      return await import(pathToFileURL(modulePath).href);
    } catch {
      throw new Error(
        `Could not load pdfjs-dist from ${modulePath}. Check the bundled workspace dependency path and try again.`
      );
    }
  }
}

async function extractPdfText(filePath) {
  const pdfjs = await loadPdfjs();
  const data = new Uint8Array(await fs.readFile(filePath));
  const document = await pdfjs.getDocument({
    data,
    useWorkerFetch: false,
    isEvalSupported: false
  }).promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const content = await page.getTextContent();
    const lines = [];
    let currentLine = [];

    for (const item of content.items) {
      if (!("str" in item)) {
        continue;
      }

      currentLine.push(item.str);

      if (item.hasEOL) {
        lines.push(currentLine.join(" ").trim());
        currentLine = [];
      }
    }

    if (currentLine.length > 0) {
      lines.push(currentLine.join(" ").trim());
    }

    pages.push(lines.filter(Boolean).join("\n"));
  }

  return pages.filter(Boolean).join("\n\n");
}

async function extractText(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  if (TEXT_EXTENSIONS.has(extension)) {
    return fs.readFile(filePath, "utf8");
  }

  if (TEXTUTIL_EXTENSIONS.has(extension)) {
    return extractWithTextutil(filePath);
  }

  if (extension === ".pdf") {
    return extractPdfText(filePath);
  }

  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return extractWithTextutil(filePath);
  }
}

const inputPath = process.argv[2];

if (!inputPath) {
  printUsage();
  process.exit(1);
}

try {
  const resolvedPath = path.resolve(inputPath);
  const extracted = await extractText(resolvedPath);

  process.stdout.write(`${normalizeText(extracted)}\n`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
}
