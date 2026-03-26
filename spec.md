# Accounting Firm Website Scaffold Spec

Build a production-ready marketing website for an Australian accounting and tax practice.

## Primary goals

1. Fast to build and deploy
2. Excellent SEO foundation
3. Professional and trustworthy design
4. Clean, feminine-friendly visual style
5. Easy to maintain and expand later with blog/content pages
6. Ready for Vercel deployment and custom domain
7. Analytics-ready for lead generation

---

## Recommended tech stack

Use the following stack unless there is a strong reason not to:

- Next.js (App Router, latest stable)
- TypeScript
- Tailwind CSS
- shadcn/ui for reusable UI primitives where useful
- Framer Motion only for very subtle motion, not heavy animation
- next-sitemap for sitemap generation if needed
- Vercel deployment target
- React Hook Form + Zod for contact form validation
- Optional email handling through Resend or simple API route placeholder

Do NOT build this as a pure client-side SPA.  
Prefer server-rendered or statically generated pages for SEO.

---

## Website purpose

This website is for an accounting / tax practice targeting Australian clients, especially individuals and small businesses.

The site should communicate:

- Professional expertise
- Trustworthiness
- Clarity
- Simplicity
- Warm but polished brand feel

The website should feel more like a boutique professional services firm than a startup landing page.

---

## Design direction

### Overall visual style

Create a clean, elegant, professional accounting firm website.

Avoid:
- dark / black-heavy design
- flashy gradients
- overly techy startup aesthetics
- overly masculine corporate blue-only style
- crowded layouts
- excessive animation

Aim for:
- light background
- soft and calm colour palette
- tasteful feminine-friendly accents
- premium but approachable
- spacious layout
- rounded corners but not childish
- subtle shadows
- clean typography
- strong readability

### Suggested palette

Use a light and professional palette, for example:

- Background: off-white / warm white
- Primary: muted teal, sage, or elegant blue-green
- Secondary accent: dusty rose / soft blush / muted peach in very limited amounts
- Text: charcoal / deep grey, not pure black
- Borders: soft neutral grey
- Cards: white with subtle shadow

Do not overuse pink.  
The site should still look credible as a professional accounting website.

### Typography

Use a clean professional font pairing.  
Prefer modern sans-serif fonts that feel polished and trustworthy.

Examples:
- Inter
- Manrope
- Plus Jakarta Sans

Use strong hierarchy:
- clear hero heading
- concise subheadings
- readable body text
- slightly refined section titles

---

## SEO requirements

This is extremely important.

### Technical SEO

Implement:

- semantic HTML
- server-side friendly rendering
- page-level metadata
- title and meta description for each page
- canonical tags
- Open Graph metadata
- robots.txt
- sitemap.xml
- clean URL structure
- good heading hierarchy (one H1 per page)
- internal linking
- image alt text support
- fast page performance
- mobile-first responsive design

### Local/business SEO foundation

Structure the content so this site can rank later for terms like:

- accountant melbourne
- tax accountant melbourne
- chinese accountant melbourne
- tax return accountant australia
- small business accountant melbourne
- bas gst accountant melbourne

Create the site so it is easy later to expand into:
- suburb pages
- service-specific landing pages
- blog posts
- FAQ pages

### Structured data

Add JSON-LD structured data where appropriate, at minimum:
- Organization
- ProfessionalService or AccountingService if appropriate
- FAQPage on FAQ sections if present

Use placeholders for business details so they can be filled later.

---

## Performance requirements

The site should feel very fast.

Priorities:
- minimal JS where possible
- optimized images
- lazy loading where appropriate
- avoid heavy dependencies
- keep animations subtle and minimal
- prioritize Core Web Vitals

---

## Pages to build

Build the following pages:

### 1. Home page `/`
Sections:
- Hero
- Trust/value proposition
- Services overview
- Why choose us
- Who we help
- Simple process
- FAQ preview
- CTA/contact section

### 2. About page `/about`
Include:
- founder/practice introduction
- qualifications placeholders
- philosophy / approach
- why clients work with us
- optional short personal warm touch without becoming casual

### 3. Services page `/services`
Overview of all services with cards and links to detail pages.

### 4. Individual tax page `/services/individual-tax`
Include:
- tax returns
- investment income
- ETF / shares
- rental property
- capital gains tax
- complex income situations

### 5. Business tax page `/services/business-tax`
Include:
- company / trust / sole trader support
- BAS / GST
- bookkeeping coordination
- tax compliance
- small business guidance

### 6. ATO support page `/services/ato-support`
Include:
- ATO review support
- tax risk review
- responding to queries
- practical support and documentation guidance

### 7. FAQ page `/faq`
Grouped questions and answers.

### 8. Contact page `/contact`
Include:
- inquiry form
- email placeholder
- service area text
- CTA to book a consultation

### 9. Privacy Policy page `/privacy`
Simple placeholder but professionally formatted.

### 10. Optional blog index scaffold `/insights`
Create the structure even if only placeholder posts exist.  
This is important for future SEO/content marketing.

---

## Navigation and layout

### Header
Include:
- logo text placeholder
- nav links
- CTA button “Book a Consultation” or “Contact Us”

### Footer
Include:
- business name placeholder
- quick links
- service links
- contact placeholders
- privacy policy
- copyright

Use a shared site layout with consistent spacing and containers.

---

## Content approach

Use polished placeholder copy that sounds credible and professional.

Tone:
- clear
- trustworthy
- warm
- concise
- not too salesy
- not overly technical
- not fluffy

Avoid:
- exaggerated marketing claims
- cliché startup copy
- aggressive sales language

### Example tone direction

Good:
- Clear tax and accounting support for individuals and growing businesses.
- Practical guidance, careful attention to detail, and responsive support.

Bad:
- We revolutionize tax forever with cutting-edge innovation.
- Your number one guaranteed accounting growth machine.

---

## Home page content structure details

### Hero
Left side:
- headline
- supporting paragraph
- two CTA buttons

Right side:
- elegant illustration / abstract card / professional visual block
- no cheesy stock-photo dependence required

Suggested style:
- premium service firm
- clean layered shapes
- subtle accent background

Example headline style:
- Practical accounting and tax support for individuals and growing businesses in Australia.
- Clear advice. Careful compliance. Confidence at tax time.

### Services overview
Use 3 to 6 service cards:
- Individual Tax
- Business Tax
- BAS / GST
- ATO Review Support
- Tax Planning
- Investment / Rental Property Tax

### Why choose us
Use 3 to 4 value blocks such as:
- Clear communication
- Detail-oriented support
- Practical advice
- Responsive and professional service

### Process
Use a simple 3-step or 4-step process:
1. Tell us about your situation
2. We review and advise
3. We prepare and support
4. You move forward with clarity

### FAQ preview
Show a few FAQs with link to full FAQ page.

### Final CTA
Encourage contact form submission.

---

## Components to create

Create reusable components where sensible:

- SiteHeader
- SiteFooter
- HeroSection
- SectionHeading
- ServiceCard
- ValueCard
- ProcessSteps
- FAQAccordion
- CTASection
- ContactForm
- TestimonialPlaceholder
- PageHero
- Breadcrumbs
- Container

Keep components simple and reusable.

---

## Contact form requirements

Build a working frontend form with validation.

Fields:
- Name
- Email
- Phone (optional)
- Service needed
- Message

Requirements:
- client-side validation
- accessible labels
- clear success/error states
- API route placeholder for submission
- easy future integration with email service

Optional:
- simple anti-spam honeypot field

Do not overcomplicate backend logic.  
Keep it easy to wire into Resend, Formspree, or another email provider later.

---

## Analytics and tracking readiness

Prepare the project for analytics.

### Implement placeholders/hooks for:
- Google Analytics 4
- Google Search Console verification meta or DNS note
- form submission event
- click-to-email event
- click-to-phone event
- consultation CTA click event

Add a small utility or clear comments indicating where GA4 can be inserted.

If practical, include:
- `NEXT_PUBLIC_GA_ID` environment variable support
- a simple analytics helper for event tracking

---

## Content management approach

For now, keep content simple and file-based.

Preferred approach:
- hardcoded structured content in code or local content files
- easy to refactor later into CMS

Do NOT introduce a heavy CMS unless truly necessary.

But structure the project so future migration to one of the following would be easy:
- Sanity
- Contentful
- Notion-backed content
- Markdown/MDX blog

For now, `/insights` can use local placeholder data.

---

## Accessibility requirements

Ensure:
- semantic landmarks
- keyboard navigable menus
- visible focus states
- sufficient contrast
- proper labels on forms
- alt text for images
- responsive text sizing

---

## Responsive requirements

The website must work beautifully on:
- mobile
- tablet
- desktop

Pay extra attention to:
- header/nav collapse
- hero spacing
- card stacking
- readable line lengths
- form usability on mobile

---

## File/folder expectations

Use a clean project structure like:

- `app/`
- `components/`
- `lib/`
- `content/`
- `public/`
- `styles/`

Example pages:
- `app/page.tsx`
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/services/individual-tax/page.tsx`
- `app/services/business-tax/page.tsx`
- `app/services/ato-support/page.tsx`
- `app/faq/page.tsx`
- `app/contact/page.tsx`
- `app/privacy/page.tsx`
- `app/insights/page.tsx`

Also include:
- metadata setup
- robots config
- sitemap config
- not-found page

---

## Metadata requirements

Each page should define:
- title
- description
- canonical
- open graph title
- open graph description

Use a centralized helper for metadata generation if useful.

Use placeholder business name such as:
`[Practice Name]`

Use placeholder location such as:
`Melbourne, Australia`

---

## Placeholder business details

Use clearly labeled placeholders for:
- business name
- founder name
- qualifications
- email
- phone
- service area
- domain
- ABN or registration details if later needed

Example placeholder:
- `[Practice Name]`
- `[Founder Name]`
- `[Email Address]`

Do not invent fake credentials.

---

## Copywriting notes

Write professional placeholder copy in English.

Keep the wording realistic for an accounting/tax firm in Australia.

Do not mention being “the best” or use fake social proof.  
Do not add fake reviews unless clearly labeled as placeholders.

---

## Nice-to-have features

If time allows, include:
- sticky header on scroll
- subtle hover states
- tasteful FAQ accordion animation
- blog card scaffold
- reusable CTA banner
- small trust bar under hero
- soft section backgrounds for visual rhythm

---

## Avoid these mistakes

- no giant dark hero
- no black-heavy theme
- no crypto/startup aesthetic
- no unnecessary parallax
- no bloated dependencies
- no lorem ipsum
- no fake testimonials presented as real
- no overdesigned gradients
- no client-only rendering for core content
- no inaccessible contrast

---

## Deliverables

Please generate:

1. Full project scaffold
2. Clean responsive UI
3. All core pages listed above
4. Shared layout and reusable components
5. Tailwind styling
6. Basic SEO setup
7. Robots and sitemap support
8. Contact form UI with placeholder submit handler
9. Analytics-ready hooks/comments
10. Clear README for running and deploying to Vercel

---

## Deployment target

Assume deployment to Vercel.

The README should include:
- install steps
- local run steps
- build steps
- env variable notes
- how to connect a custom domain
- where to add GA4 id
- where to edit business content

---

## Final implementation preference

Optimize for:
1. clean code
2. speed of delivery
3. SEO readiness
4. polished visual credibility

This is a professional service business website, not a SaaS product or flashy design portfolio.

Make it elegant, light, trustworthy, and conversion-friendly.