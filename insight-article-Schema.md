# Insight Article JSON Generator

Use this file as the instruction sheet when asking GPT to turn a plain-text article into a ready-to-save insight JSON file for this project.

## What GPT should do

Given:
- a plain-text source article
- this schema guide

GPT should return:
- one valid JSON object only
- no Markdown code fences
- no explanation before or after the JSON
- both `en` and `zh` translations completed
- content ready to save as `content/insights/articles/<slug>.json`
- all keys and string values quoted correctly

## Authoring goals

The output should feel:
- professional
- practical
- easy for a tax and accounting client to understand
- suitable for an Australian accounting website
- consistent across both English and Chinese

The content should avoid:
- legal overclaiming
- excessive jargon
- salesy language
- placeholders like "TBD", "sample", or "draft"

## Required JSON shape

```json
{
  "slug": "kebab-case-slug",
  "publishedAt": "YYYY-MM-DD",
  "featured": false,
  "translations": {
    "en": {
      "card": {
        "title": "English article title",
        "excerpt": "English summary used for cards, archive header, and SEO description.",
        "category": "One broad topic label",
        "tags": [
          "One short topic tag",
          "Optional second tag"
        ]
      },
      "intro": "Short introductory paragraph.",
      "sections": [
        {
          "title": "Section title",
          "paragraphs": [
            "Paragraph one.",
            "Paragraph two."
          ],
          "bullets": [
            "Optional bullet",
            "Optional bullet"
          ],
          "numberedPoints": [
            "Optional numbered point",
            "Optional numbered point"
          ]
        }
      ],
      "takeawayTitle": "Short takeaway heading",
      "takeawayItems": [
        "Short takeaway",
        "Short takeaway"
      ]
    },
    "zh": {
      "card": {
        "title": "中文标题",
        "excerpt": "中文摘要，会用于文章卡片、归档头部与 SEO 描述。",
        "category": "一个较宽泛的主题分类",
        "tags": [
          "一个简短主题标签",
          "可选的第二个标签"
        ]
      },
      "intro": "中文引言。",
      "sections": [
        {
          "title": "小节标题",
          "paragraphs": [
            "第一段。",
            "第二段。"
          ],
          "bullets": [
            "可选要点",
            "可选要点"
          ],
          "numberedPoints": [
            "可选编号要点",
            "可选编号要点"
          ]
        }
      ],
      "takeawayTitle": "简短总结标题",
      "takeawayItems": [
        "简短总结",
        "简短总结"
      ]
    }
  }
}
```

## Field rules

### `slug`
- Must be lowercase kebab-case
- Use only letters, numbers, and hyphens
- The future file name must be exactly `<slug>.json`
- Keep it concise and readable

### `publishedAt`
- Must use `YYYY-MM-DD`
- Use a real calendar date

### `featured`
- Optional
- Use `true` only when the article should be featured
- Otherwise set `false` or omit it

### `translations.en.card.title`
- This is also the page title and SEO title
- Keep it natural and client-friendly
- Avoid clickbait

### `translations.en.card.excerpt`
- This is also the archive summary and SEO description
- Keep it to one concise summary sentence
- Make it useful to a real reader

### `translations.zh.card.title`
- Natural Simplified Chinese
- Not word-for-word translation if a smoother phrasing is better

### `translations.zh.card.excerpt`
- Natural Simplified Chinese
- Keep it concise and useful

### `category`
Use one existing broad topic such as:
- `Individual tax` / `个人税务`
- `Business tax` / `企业税务`
- `ATO support` / `ATO 协助`

Do not invent narrow categories like `Crypto tax`, `Creator tax`, or `Property tax`. Keep the category broad and use `tags` for specificity.

### `tags`
- Use `tags`, not `tag`
- Include 1 to 3 short topic labels
- Keep the English and Chinese arrays aligned in both count and order
- Reuse existing repo wording when possible

Common tag examples already used in this repo:
- `GST` / `GST`
- `BAS` / `BAS`
- `Deductions` / `抵扣`
- `Record keeping` / `资料留存`
- `Tax returns` / `报税`
- `Business structure` / `经营架构`
- `Contractors` / `承包接案`
- `Digital income` / `线上收入`
- `Tax planning` / `税务规划`
- `Family` / `家庭`
- `Property` / `房产`
- `Investments` / `投资`
- `ATO reviews` / `ATO 审查`

## Section rules

Each section must include:
- `title`
- at least one item in `paragraphs`

Optional:
- `bullets`
- `numberedPoints`

Important:
- `bullets` and `numberedPoints` should only be included when useful
- Do not add them as empty arrays
- Use `numberedPoints` when the content is sequential, step-based, or prioritised
- Use `bullets` when the content is a grouped list rather than a sequence

## Bilingual consistency rules

The English and Chinese versions should stay aligned:
- same number of tags and the same tag order
- same number of sections
- same section order
- same number of paragraphs in each corresponding section
- same number of bullets in each corresponding section when bullets are used
- same number of numbered points in each corresponding section when numbered points are used
- same number of takeaway items

The Chinese version should be a high-quality localisation, not an awkward literal translation.

## Writing guidance

Tone:
- calm
- practical
- clear
- trustworthy

Preferred style:
- explain what matters
- help the reader understand the next step
- keep sentences readable
- sound like a professional accounting firm, not a generic content farm

Avoid:
- exaggerated promises
- hard-sell CTAs inside the article body
- overly technical wording unless necessary
- unsupported legal or tax certainty

## Output checklist for GPT

Before returning the JSON, check that:
- the output is valid JSON
- every key is wrapped in double quotes
- every string value is wrapped in double quotes
- both `en` and `zh` exist
- the filename can be `<slug>.json`
- `title` and `excerpt` are strong enough to be used as SEO metadata
- there are no placeholder phrases
- there are no empty arrays
- there are no trailing commas
- the section structure matches across both languages

## Recommended prompt pattern

You can pair this file with a prompt like:

```text
Read the article below and convert it into the exact JSON format required by insight-article-schema.md.

Requirements:
- output raw JSON only
- include both English and Simplified Chinese
- make the Chinese version natural, not literal
- keep the same structure across both languages
- choose an appropriate category and up to 3 tags
- infer a good slug and excerpt

Article:
[paste plain text article here]
```
