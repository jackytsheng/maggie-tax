---
name: article-dump-to-insight-json
description: Convert raw source articles, pasted article text, or uploaded files in txt, md, doc, docx, rtf, html, odt, and pdf form into valid Maggie-Web insight article JSON files under content/insights/articles/. Use this when the user provides article source material and wants bilingual zh/en insight JSON that matches the repo schema, filename rules, and validation tests. If the source does not include a date, assign one in the last 2-4 months and spread new articles evenly across that window.
---

# Article Dump To Insight JSON

Use this skill when the task is to turn source article material into one or more JSON files for `content/insights/articles/`.

## First Read

Before writing any article JSON, inspect these repo files:

- `content/insights/types.ts`
- `content/insights/index.ts`
- `insight-article-schema.md`
- `tests/insight-articles.test.mjs`

Those files define the required JSON shape, the bilingual structure rules, and the validation checks.

## Workflow

1. Gather the source text.
2. Turn each source article into one JSON object.
3. Save each file as `content/insights/articles/<slug>.json`.
4. Run `npm run test:articles`.
5. Verify the article is reachable at both `/en/insights/<slug>` and `/zh/insights/<slug>`.

## Source Ingestion

For pasted text, use the text directly.

For files, use `.agents/skills/article-dump-to-insight-json/scripts/extract-article-text.mjs`.

Examples:

```bash
node .agents/skills/article-dump-to-insight-json/scripts/extract-article-text.mjs "/path/to/article.md"
node .agents/skills/article-dump-to-insight-json/scripts/extract-article-text.mjs "/path/to/article.docx"
```

For PDFs, first call `load_workspace_dependencies` and then pass the bundled Node modules path as `CODEX_BUNDLED_NODE_MODULES`:

```bash
CODEX_BUNDLED_NODE_MODULES="/absolute/path/to/bundled/node_modules" \
node .agents/skills/article-dump-to-insight-json/scripts/extract-article-text.mjs "/path/to/article.pdf"
```

The extractor is meant to get clean working text into the prompt or editing context. It does not generate JSON by itself.

## JSON Authoring Rules

- Create one file per source article.
- `slug` must be lowercase kebab-case and the filename must match it exactly.
- `translations.en` and `translations.zh` must both exist.
- `intro` must be a real introductory paragraph in both languages, not an empty string.
- Keep the same section order and structure across both languages.
- Do not emit empty `bullets` or `numberedPoints` arrays.
- Use natural Simplified Chinese for `zh`. Match structure, not literal wording.
- Keep the tone practical, calm, and appropriate for an Australian accounting website.
- Avoid legal overclaiming, placeholders, hype, and generic SEO filler.
- Keep section titles short and heading-like. Do not let a full body paragraph become the section `title`.

### Source formatting edge cases

- Some source documents place the subtitle and intro paragraphs back-to-back with no blank line. Treat those sentences as `intro`, not as the first section title.
- Do not split the intro into a fake section just because the sentence ends with a question mark.
- Callout labels such as `Conditions for GST-Free Health Services`, `Company vs Sole Trader`, or similar highlighted lines may be subheadings inside a section. Check the surrounding structure before turning them into standalone sections.
- If the source gives a list under a heading with little or no lead paragraph, add a short natural lead-in paragraph rather than copying the heading text into `paragraphs`.
- After adding new article files, refresh the article URLs in both locales to confirm the site can resolve the slug in each language.

## Metadata Rules

### File name and slug

- Build the slug from the English title or the clearest English topic phrase.
- Keep it concise and readable.
- The saved file must be `content/insights/articles/<slug>.json`.

### Category and tag

Prefer the vocabulary already used in the repo unless the article clearly needs another value.

Common categories:

- `Individual tax` / `个人税务`
- `Business tax` / `企业税务`
- `ATO support` / `ATO 协助`

Common tags:

- `Guide` / `指南`
- `Checklist` / `清单`
- `Explainer` / `解读`
- `FAQ` / `问答`
- `Update` / `更新`

### `featured`

- Default to `false` or omit it.
- Use `true` only when the user clearly wants a featured piece or the article is meant to be a flagship recent item.

### `publishedAt`

- If the source includes a trustworthy date, use it.
- If the source does not include a date, assign a real date in the last 2-4 months.
- When creating multiple new files in one batch, spread the invented dates across that window instead of clustering them on the same week.

Use the helper script to suggest a date and slug:

```bash
node .agents/skills/article-dump-to-insight-json/scripts/suggest-insight-metadata.mjs --title "What to prepare before lodging your tax return"
```

When batching multiple new articles, pass earlier suggestions back in with `--reserve` so later files stay evenly distributed:

```bash
node .agents/skills/article-dump-to-insight-json/scripts/suggest-insight-metadata.mjs \
  --title "Responding to an ATO review letter" \
  --reserve 2026-01-17 \
  --reserve 2026-02-12
```

## Batch Expectations

If the user provides a folder or dump with several source articles:

- extract each source article separately
- create a separate JSON file for each
- make up missing metadata where needed
- keep invented publication dates recent and distributed
- validate the whole set before finishing

## Final Checks

Before wrapping up:

- confirm the filename matches the slug
- confirm `publishedAt` is a real calendar date
- confirm both locales exist
- confirm each locale has a non-empty `intro`
- confirm each section title is concise and looks like a heading rather than a copied paragraph
- confirm zh/en structures align
- confirm the JSON parses cleanly
- run `npm run test:articles`
- verify both `/en/insights/<slug>` and `/zh/insights/<slug>` load successfully
