# Maggie-Web Agent Guide

## Repo Shape

- This is a bilingual Next.js site for an Australian accounting practice.
- Insight article content lives in `content/insights/articles/*.json`.
- Insight loading, sorting, archive filters, and read-time logic live in `content/insights/index.ts`.
- The insight data contract lives in `content/insights/types.ts`.
- The human-oriented authoring brief lives in `insight-article-schema.md`.
- The hard validator for article files lives in `tests/insight-articles.test.mjs`.

## Working On Insight Articles

- Keep each article in its own JSON file under `content/insights/articles/`.
- The filename must exactly match the `slug`: `<slug>.json`.
- `publishedAt` must be a real `YYYY-MM-DD` date.
- `translations.en` and `translations.zh` must stay structurally aligned:
  same section count, paragraph count per section, bullet count, numbered point count, and takeaway item count.
- Use `featured` sparingly. Default to `false` or omit it unless there is a clear reason to feature the article.

## Validation

- Run `npm run test:articles` after adding or editing insight article JSON.
- Run `npm run typecheck` if TypeScript code or content-loading logic changes.

## Local Skills

- Repo-local skills live under `.agents/skills/`.
- Use `.agents/skills/article-dump-to-insight-json/` when turning article dumps or uploaded documents into valid insight article JSON files for this repo.
