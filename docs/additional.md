# Additional requirements: responsiveness and localisation

These requirements are mandatory.

---

## Responsiveness requirements (mandatory)

This website must be fully responsive and production-ready across:

- mobile phones
- tablets
- laptops
- desktop monitors

Do NOT treat responsiveness as a minor afterthought.

### Responsive design expectations

- Build mobile-first
- Ensure every section looks intentional on small screens
- No overflowing text, buttons, cards, tables, or forms
- Navigation must collapse elegantly on mobile
- Buttons must remain easy to tap on touch devices
- Forms must be easy to complete on mobile
- Headings must wrap gracefully
- Spacing must scale properly across breakpoints
- Images and decorative elements must not break layout
- Service cards and content grids must stack cleanly
- Footer must remain readable and well-structured on mobile

### Test for these breakpoints at minimum

- 375px
- 768px
- 1024px
- 1440px

### Areas that need special responsive attention

- header and mobile navigation
- hero section layout
- CTA button wrapping
- services card grid
- FAQ accordion spacing
- contact form layout
- footer columns
- section padding and vertical rhythm
- typography scale and line length

Prefer a clean single-column flow on mobile and progressively enhance for larger screens.

---

## Localisation / internationalisation requirements (mandatory)

This website must support multiple locales from the beginning.

### Locale strategy

Implement bilingual support with:

- Chinese as the default primary language
- English as secondary language
- scalable structure for future languages

Use locale-based routing.

Preferred route structure:

- `/zh/...` for Chinese
- `/en/...` for English

Also implement a root route strategy:

- `/` should redirect to `/zh`
- all main pages should exist under both locale paths

Examples:

- `/zh`
- `/zh/about`
- `/zh/services`
- `/zh/contact`

- `/en`
- `/en/about`
- `/en/services`
- `/en/contact`

Do NOT hardcode the site in one language only.

---

## i18n implementation guidance

Use a clean and maintainable internationalisation approach suitable for Next.js App Router.

Preferred:
- `next-intl`

Alternative acceptable:
- a well-structured custom dictionary-based i18n approach if kept simple and scalable

Requirements:
- locale-aware routing
- locale-aware navigation
- locale switcher component
- translated metadata support where practical
- translation dictionaries stored in a clean structure
- easy editing of copy for each locale

Suggested structure:

- `messages/zh.json`
- `messages/en.json`

or

- `content/i18n/zh.ts`
- `content/i18n/en.ts`

The implementation should make it easy to add more pages and more languages later.

---

## Locale switcher

Add a simple language switcher in the header.

Requirements:
- visible but subtle
- professional styling
- easy to use on mobile and desktop
- switching language should preserve equivalent page when possible

Examples:
- if user is on `/zh/contact`, switching to English should go to `/en/contact`

---

## SEO requirements for multilingual support

This is important.

Implement multilingual SEO correctly:

- set correct `lang` attribute on html element
- add canonical URLs
- add `hreflang` alternates for Chinese and English pages
- ensure each locale page has its own metadata
- avoid duplicate-content issues between locales
- generate sitemap entries for both locale versions

If possible, support metadata per locale such as:

- Chinese title and description for `/zh/...`
- English title and description for `/en/...`

---

## Content strategy for v1

For the initial version:

- Chinese should have the most polished copy
- English can also be fully scaffolded and professional
- use realistic translated placeholder copy, not lorem ipsum
- structure all pages so both locales have matching route coverage

Required pages in both locales:

- home
- about
- services
- individual tax
- business tax
- ATO support
- FAQ
- contact
- privacy
- insights

---

## Technical implementation expectations

Use Next.js App Router with locale segment structure, for example:

- `app/[locale]/layout.tsx`
- `app/[locale]/page.tsx`
- `app/[locale]/about/page.tsx`
- etc.

Add middleware if needed for locale redirection from `/` to `/zh`.

The codebase should be organised so that:
- layout is reusable
- content is locale-driven
- components remain reusable across locales
- future translation work is simple

---

## Content editing requirement

Create a central content/config structure so business information can be edited once and reused across locales where appropriate.

Examples:
- business name
- email
- phone
- city
- CTA labels
- service descriptions
- homepage hero copy

Prefer separating:
- shared business config
- locale-specific copy

---

## Final UX expectation

The site should feel:
- polished on mobile
- elegant on desktop
- clean in both Chinese and English
- fast in both locales
- SEO-friendly in both locales
