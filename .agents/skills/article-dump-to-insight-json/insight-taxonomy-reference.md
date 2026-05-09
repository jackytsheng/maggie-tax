# Insight Taxonomy Reference

Use this file as the preferred category and tag vocabulary when turning source articles into insight JSON.

## Category rules

- Reuse one of the existing categories below by default.
- Keep categories broad.
- Express niche topics through `card.tags`, not through a new category.
- Only create a new category when it is genuinely necessary for the repo, or when the user explicitly asks for one.

## Existing categories

- `Business tax` / `企业税务`
- `Individual tax` / `个人税务`
- `ATO support` / `ATO 协助`

## Tag rules

- Reuse existing tags whenever they fit.
- Use at least 1 existing tag from this list for every new article.
- You do not need to use all possible tags.
- Use 1 to 3 tags total.
- Keep English and Chinese tag arrays aligned in count and order.
- Only create a new tag when the topic cannot be labelled clearly with the current list, or when the user explicitly asks for a new tag.

## Existing tags

Sorted roughly by current frequency in the repo:

- `GST` / `GST`
- `Business structure` / `经营架构`
- `Deductions` / `抵扣`
- `Record keeping` / `资料留存`
- `Tax planning` / `税务规划`
- `Contractors` / `承包接案`
- `Digital income` / `线上收入`
- `Tax returns` / `报税`
- `Employees` / `雇员税务`
- `Health services` / `健康服务`
- `Family` / `家庭`
- `Investments` / `投资`
- `Property` / `房产`
- `ATO reviews` / `ATO 审查`
- `BAS` / `BAS`
- `Crypto` / `加密资产`
- `E-commerce` / `电商`
- `Government payments` / `政府补助`
- `Shares` / `员工持股`
- `Trusts` / `信托`

## Quick mapping guidance

- BAS, lodgement cadence, GST setup, GST collection: prefer `BAS`, `GST`, `Record keeping`
- Deductions, substantiation, receipts, claims: prefer `Deductions`, `Record keeping`, `Tax returns`
- Sole trader vs company, trusts, restructure, entity choice: prefer `Business structure`, `Tax planning`
- Freelancer, contractor, agency, PSI topics: prefer `Contractors`, sometimes `Business structure`
- Creators, SaaS, online coaching, platform income: prefer `Digital income`, often `GST`
- RSUs, employee claims, salary-linked tax issues: prefer `Employees`, sometimes `Shares`
- Rental property, property tax records, depreciation: prefer `Property`, often `Record keeping`
- Family support, children, parental payments: prefer `Family`, sometimes `Government payments`
- ATO review letters, document requests, reviews: prefer `ATO reviews`, often `Record keeping`
- Crypto investing or trading topics: prefer `Crypto`, often `Investments`, sometimes `Record keeping`
