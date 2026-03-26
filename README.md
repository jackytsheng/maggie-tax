# Maggie Web

Production-ready bilingual marketing website scaffold for an Australian accounting and tax practice.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Locale-based routing with `/zh` and `/en`
- Static SEO routes for sitemap and robots

## Features

- Chinese-first and English secondary locale support
- Root redirect from `/` to `/zh`
- Responsive header, mobile navigation, footer, cards, and forms
- Core marketing pages for home, about, services, FAQ, contact, privacy, and insights
- Detailed service pages for individual tax, business tax, and ATO support
- Localised metadata, canonical URLs, and `hreflang` alternates
- Structured data for organization, professional service, and FAQ content
- Validated contact form with API placeholder and anti-spam honeypot field
- Analytics-ready hooks for GA4, CTA clicks, form submission, click-to-email, and click-to-phone

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and run

```bash
npm run typecheck
npm run build
npm run start
```

The build script uses `next build --webpack` because that path was the reliable verified build in this environment.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values you need:

- `NEXT_PUBLIC_GA_ID`
  Use this to enable the GA4 script injection in the shared locale layout.
- `NEXT_PUBLIC_GSC_VERIFICATION`
  Use this for Google Search Console verification metadata.

If these values are omitted, the site still runs normally.

## Where to edit content

- Shared business details:
  [`content/business.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/content/business.ts)
- Chinese copy:
  [`content/i18n/zh.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/content/i18n/zh.ts)
- English copy:
  [`content/i18n/en.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/content/i18n/en.ts)
- Contact form validation:
  [`lib/validation.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/lib/validation.ts)
- Contact API placeholder:
  [`app/api/contact/route.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/app/api/contact/route.ts)

## Locale routing

- `/` redirects to `/zh`
- Chinese pages live under `/zh/...`
- English pages live under `/en/...`
- The header language switcher preserves the current page path when switching locales

## SEO notes

SEO helpers are centralized in:

- [`lib/metadata.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/lib/metadata.ts)
- [`app/sitemap.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/app/sitemap.ts)
- [`app/robots.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/app/robots.ts)
- [`lib/structured-data.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/lib/structured-data.ts)

To go live, update the placeholder domain in [`content/business.ts`](/Users/jiajinzheng/Desktop/github-repo/Maggie-Web/content/business.ts) so canonical URLs, sitemap entries, and structured data point to the real domain.

## Deployment to Vercel

1. Create a new Vercel project and import this repository.
2. Add the environment variables from `.env.example` if needed.
3. Deploy using the default Next.js settings.
4. In Vercel project settings, add your custom domain.
5. Update `content/business.ts` so the `domain`, email, phone, and placeholder business details match the real practice.

## Future integrations

- Replace the placeholder contact route with Resend, Formspree, or your preferred email workflow.
- Expand `content/i18n/*` with suburb landing pages, detailed FAQ content, or insights articles.
- Add real business credentials, founder biography, and policy wording before launch.
# maggie-tax
