import { business } from "@/content/business";
import type { Dictionary } from "@/content/i18n/schema";

export const en = {
  localeLabel: "English",
  meta: {
    siteDescription:
      "Boutique accounting and tax support for individuals and small businesses in Melbourne and across Australia.",
    keywords: [
      "accountant Melbourne",
      "tax accountant Melbourne",
      "small business accountant Melbourne",
      "ATO support Australia",
      "rental property tax accountant",
      "BAS GST accountant Melbourne"
    ]
  },
  nav: {
    links: [
      { label: "Home", href: "" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "FAQ", href: "/faq" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" }
    ],
    ctaLabel: "Book a Consultation",
    mobileMenuLabel: "Open navigation",
    languageSwitcherLabel: "Switch language"
  },
  common: {
    homeLabel: "Home",
    skipToContent: "Skip to content",
    learnMore: "Learn more",
    exploreServices: "Explore services",
    contactUs: "Contact us",
    readMore: "Read more",
    viewAllFaqs: "View all FAQs",
    processLabel: "Process",
    serviceLabel: "Service",
    emailLabel: "Email",
    phoneLabel: "Phone",
    closeLabel: "Close",
    openLabel: "Open",
    comingSoon: "Coming soon",
    notProvided: "To be added"
  },
  footer: {
    description:
      "Clear, careful accounting and tax support designed for Australians who want calm, responsive advice.",
    quickLinksTitle: "Quick links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    serviceAreaLabel: "Service area",
    privacyLabel: "Privacy Policy",
    rightsReserved: "All rights reserved."
  },
  home: {
    metaTitle: "Accounting and Tax Support in Melbourne",
    metaDescription:
      "Professional accounting and tax support for individuals and growing businesses in Melbourne and across Australia.",
    hero: {
      eyebrow: "Melbourne accounting and tax practice",
      title: "Practical accounting and tax support for individuals and growing businesses in Australia.",
      description:
        "We help clients move through tax, compliance, and ATO matters with clear communication, careful review, and steady support that feels professional from first contact to final lodgement.",
      primary: { label: "Book a Consultation", href: "/contact" },
      secondary: { label: "Explore services", href: "/services" },
      trustPoints: [
        "Australian tax support tailored to real-life client situations",
        "Structured guidance for individuals, investors, and small businesses",
        "Built for long-term clarity, not one-off transactions"
      ],
      panel: {
        title: "Start with the service that best matches your situation.",
        description:
          "If you are unsure, the contact form is set up so we can guide you to the right next step.",
        expectationsLabel: "What you can expect",
      },
      quickLinks: {
        title: "Popular starting points",
        description:
          "Most enquiries begin in one of these core areas."
      }
    },
    trustBar: ["Melbourne-based", "Individuals and small businesses", "Bilingual-ready client experience"],
    services: {
      eyebrow: "Services",
      title: "Focused support for the work that matters most.",
      description:
        "The initial service structure is designed for strong SEO foundations today and service-page expansion later.",
      cards: [
        {
          title: "Individual Tax",
          description: "Tax returns, investment income, rental properties, capital gains, and more complex income situations.",
          href: "/services/individual-tax",
          tag: "Individuals"
        },
        {
          title: "Business Tax",
          description: "Support for sole traders, companies, and trusts, including compliance and practical business guidance.",
          href: "/services/business-tax",
          tag: "Business"
        },
        {
          title: "BAS and GST",
          description: "Quarterly reporting support, GST review, and coordination with bookkeeping processes.",
          href: "/services/business-tax",
          tag: "Compliance"
        },
        {
          title: "ATO Support",
          description: "Clear help when the ATO requests information, reviews activity, or needs a timely response.",
          href: "/services/ato-support",
          tag: "ATO matters"
        },
        {
          title: "Tax Planning",
          description: "Practical forward-looking guidance so tax decisions are made earlier and with more confidence.",
          href: "/services/business-tax",
          tag: "Planning"
        },
        {
          title: "Investment and Property Tax",
          description: "Support for shares, ETFs, rental property, and investment-related tax issues.",
          href: "/services/individual-tax",
          tag: "Investors"
        }
      ]
    },
    values: {
      eyebrow: "Why choose us",
      title: "Warm, careful, and detail-oriented professional service.",
      description:
        "The tone of the practice is approachable, but the work stays rigorous, well organised, and compliance-aware.",
      items: [
        {
          title: "Clear communication",
          description: "We explain the next step, the reason behind it, and what you need to provide without unnecessary jargon."
        },
        {
          title: "Careful review",
          description: "Returns and supporting information are handled with attention to detail so clients can move forward with confidence."
        },
        {
          title: "Practical advice",
          description: "Recommendations are grounded in real tax outcomes, timing, and documentation requirements."
        },
        {
          title: "Responsive support",
          description: "Clients receive professional follow-through, sensible timelines, and a clear path through each engagement."
        }
      ]
    },
    audiences: {
      eyebrow: "Who we help",
      title: "Built for the clients most likely to need steady tax support.",
      description:
        "The site structure is intentionally ready for future suburb, service, and audience-specific landing pages.",
      items: [
        {
          title: "Individuals with growing complexity",
          description: "Salary earners, multi-income households, and clients with deductions, investments, or changing personal circumstances."
        },
        {
          title: "Investors and property owners",
          description: "Clients with shares, ETFs, rental properties, and capital gains considerations that need clearer tax handling."
        },
        {
          title: "Small business operators",
          description: "Sole traders, companies, and trusts that need compliance support paired with practical day-to-day guidance."
        },
        {
          title: "Chinese-speaking households and founders",
          description: "Clients who value bilingual clarity when discussing tax obligations, documents, and ATO communication."
        }
      ]
    },
    process: {
      eyebrow: "How it works",
      title: "A simple process designed to reduce stress.",
      description: "Every step is structured to keep communication clear and momentum steady.",
      steps: [
        {
          title: "Tell us about your situation",
          description: "Share the essentials of your tax, business, or ATO matter through the enquiry form or an initial consultation."
        },
        {
          title: "We review and advise",
          description: "We identify the scope, required documents, key issues, and the most sensible next actions."
        },
        {
          title: "We prepare and support",
          description: "Returns, responses, and supporting material are prepared carefully with practical communication throughout."
        },
        {
          title: "You move forward with clarity",
          description: "You finish with stronger visibility over deadlines, compliance, and the next decisions ahead."
        }
      ]
    },
    faqPreview: {
      eyebrow: "FAQ preview",
      title: "Helpful answers before you enquire.",
      description: "A concise preview for common questions. The full FAQ page can expand later for SEO content and service-specific answers.",
      items: [
        {
          question: "Do you work with clients outside Melbourne?",
          answer: "Yes. The practice can support Melbourne-based clients and remote clients across Australia, depending on the type of engagement."
        },
        {
          question: "Can you help if my tax situation is more complex than a standard return?",
          answer: "Yes. The site and service structure are designed for clients with investments, rental property, capital gains, and other more involved tax issues."
        },
        {
          question: "What should I prepare before making contact?",
          answer: "A short summary of your situation, relevant ATO correspondence if applicable, and any key dates or documents will help us respond efficiently."
        }
      ]
    },
    cta: {
      title: "Ready to discuss your tax or accounting needs?",
      description:
        "Use the enquiry form to outline your situation and we can advise on the next step, likely scope, and how we can help.",
      primary: { label: "Contact us", href: "/contact" },
      secondary: { label: "View FAQs", href: "/faq" }
    }
  },
  about: {
    metaTitle: "About the Practice",
    metaDescription:
      "Learn about the practice approach, founder introduction, and the calm, careful service philosophy behind the firm.",
    hero: {
      eyebrow: "About",
      title: "A boutique accounting practice built around clarity, care, and long-term trust.",
      description:
        "This page is designed to introduce the founder, explain the working style of the practice, and provide space for future qualifications and credentials."
    },
    founder: {
      title: business.founderName,
      role: business.founderRole,
      summary: [
        `The practice is led by ${business.founderName}, with a focus on delivering thoughtful accounting and tax support that feels calm, clear, and dependable.`,
        "The tone of the firm is intentionally professional without being cold, so clients feel comfortable asking questions and understanding what happens next.",
        "This section is structured to make it easy to replace placeholder text with the founder's real story, background, and areas of expertise."
      ],
      warmNote:
        "A short personal note can sit here later to add warmth and trust, while still keeping the overall impression polished and professional."
    },
    philosophy: {
      title: "Practice philosophy",
      description: "The aim is to combine technical care with a client experience that feels clear and steady from beginning to end.",
      items: [
        {
          title: "Clarity over complexity",
          description: "Clients should understand what is happening, why it matters, and what the next decision looks like."
        },
        {
          title: "Quality in the details",
          description: "Good accounting work is often quiet work: careful review, solid records, and disciplined follow-through."
        },
        {
          title: "Advice with context",
          description: "Recommendations should reflect the client's stage of life, business structure, timelines, and documentation reality."
        }
      ]
    },
    qualifications: {
      title: "Qualifications and registrations",
      description: "This block is intentionally ready for real credentials to be added later without restructuring the page.",
      items: [
        business.qualifications,
        "[Professional memberships to be added]",
        "[Licence, registration, or public practice details if applicable]"
      ]
    },
    reasons: {
      title: "Why clients work with us",
      description: "Clients often choose a boutique practice when they want more care, more clarity, and less noise.",
      items: [
        {
          title: "A thoughtful pace",
          description: "You are not pushed through an impersonal process when your situation needs context and careful review."
        },
        {
          title: "Bilingual-friendly communication",
          description: "The site is built from day one with Chinese and English support in mind, which helps reduce friction for many households."
        },
        {
          title: "Long-term usefulness",
          description: "The goal is not only to complete this year's work, but also to support better decisions and cleaner records going forward."
        }
      ]
    },
    cta: {
      title: "Start the conversation with a clear first step.",
      description: "Share your situation and we can guide you toward the right service, likely timeline, and required information.",
      primary: { label: "Contact the practice", href: "/contact" },
      secondary: { label: "View services", href: "/services" }
    }
  },
  servicesPage: {
    metaTitle: "Accounting and Tax Services",
    metaDescription:
      "Browse individual tax, business tax, ATO support, and related accounting services for Melbourne and Australia-wide clients.",
    hero: {
      eyebrow: "Services",
      title: "Accounting and tax services designed for clarity, compliance, and practical support.",
      description:
        "The service architecture balances immediate launch needs with future expansion into richer service pages, suburbs, and educational content."
    },
    intro:
      "The practice focuses on a small set of core service areas first, while keeping the site easy to expand into more detailed SEO-friendly pages later.",
    cards: [
      {
        title: "Individual Tax",
        description: "Tax returns, investment income, property, capital gains, and more complex personal tax matters.",
        href: "/services/individual-tax",
        tag: "Core service"
      },
      {
        title: "Business Tax",
        description: "Support for sole traders, companies, and trusts, including BAS, GST, and ongoing compliance guidance.",
        href: "/services/business-tax",
        tag: "Core service"
      },
      {
        title: "ATO Support",
        description: "Practical help responding to reviews, queries, documentation requests, and tax risk discussions.",
        href: "/services/ato-support",
        tag: "Core service"
      },
      {
        title: "BAS and GST Coordination",
        description: "Connected support for reporting cycles, record quality, and smoother communication with bookkeepers.",
        href: "/services/business-tax",
        tag: "Related support"
      },
      {
        title: "Property and Investment Tax",
        description: "Ideal for clients with shares, ETFs, rental property, or capital gains questions.",
        href: "/services/individual-tax",
        tag: "Related support"
      },
      {
        title: "Planning and Ongoing Guidance",
        description: "Useful for clients who want a steadier tax process instead of only reacting at deadline time.",
        href: "/contact",
        tag: "Next phase"
      }
    ],
    supportAreas: {
      title: "How the service scope can grow later",
      description:
        "The structure already supports future pages for service niches, suburbs, and client-specific journeys without a major rewrite.",
      items: [
        "Chinese-speaking client advisory pages",
        "Melbourne suburb landing pages",
        "Tax return FAQs and knowledge content",
        "Service pages for property investors and business owners"
      ]
    },
    process: {
      title: "A consistent working method across services",
      description: "Regardless of the service, the workflow stays calm, structured, and easy for clients to follow.",
      steps: [
        {
          title: "Initial review",
          description: "We confirm the nature of the work, urgency, and what information will be required."
        },
        {
          title: "Scope and guidance",
          description: "You receive a clearer outline of what is involved, where the risks sit, and the best next step."
        },
        {
          title: "Preparation and support",
          description: "We prepare the relevant work carefully and communicate clearly while the matter is progressing."
        }
      ]
    },
    cta: {
      title: "Need help choosing the right service?",
      description: "If you are not sure where your situation fits, send a brief enquiry and we can guide you from there.",
      primary: { label: "Contact us", href: "/contact" },
      secondary: { label: "Read FAQs", href: "/faq" }
    }
  },
  serviceDetails: {
    individualTax: {
      metaTitle: "Individual Tax Services",
      metaDescription:
        "Support for tax returns, investment income, rental property, capital gains, and more complex personal tax matters.",
      hero: {
        eyebrow: "Individual Tax",
        title: "Individual tax support that stays organised, careful, and easy to follow.",
        description:
          "This service page is built for salary earners, investors, and individuals whose tax affairs involve more than a simple annual return."
      },
      overview: {
        title: "What this service covers",
        body:
          "The initial scope is designed to cover the most common and most commercially useful areas for personal tax work in Australia.",
        bullets: [
          "Annual tax return preparation and review",
          "Investment income including shares and ETFs",
          "Rental property and related deductions",
          "Capital gains tax support",
          "Complex income situations and documentation guidance"
        ]
      },
      highlightsTitle: "Support areas",
      highlights: [
        {
          title: "Returns with more moving parts",
          description: "Useful when your tax position includes multiple income sources, deductions, or supporting records."
        },
        {
          title: "Investment and portfolio activity",
          description: "Helpful for clients handling dividend income, managed funds, ETF holdings, and disposal events."
        },
        {
          title: "Property-related tax matters",
          description: "Designed for rental property owners who need steadier handling of income, expenses, and record keeping."
        }
      ],
      suitableTitle: "Who this is well suited for",
      suitableItems: [
        "Salary earners with deductions and changing circumstances",
        "Clients with investment income and capital events",
        "Rental property owners",
        "Households wanting more confidence in their tax records"
      ],
      faqTitle: "Common questions about individual tax",
      faqItems: [
        {
          question: "Can you help with shares, ETFs, or capital gains?",
          answer: "Yes. This page is intentionally scoped to include investment activity and the supporting review that often comes with it."
        },
        {
          question: "Do I need everything perfectly organised before contacting you?",
          answer: "No. A practical summary of your situation is enough to start. We can then outline what records and documents should be gathered."
        },
        {
          question: "Is this only for Melbourne clients?",
          answer: "No. Clients in Melbourne are a core focus, but remote support across Australia can also be accommodated where suitable."
        }
      ],
      cta: {
        title: "Need support with a more involved personal tax matter?",
        description: "Send through a short summary and we can help you identify the next step.",
        primary: { label: "Enquire now", href: "/contact" },
        secondary: { label: "Back to services", href: "/services" }
      }
    },
    businessTax: {
      metaTitle: "Business Tax Services",
      metaDescription:
        "Business tax support for sole traders, companies, and trusts, including BAS, GST, compliance, and practical guidance.",
      hero: {
        eyebrow: "Business Tax",
        title: "Business tax support with practical guidance, not just deadline pressure.",
        description:
          "This service is suited to small businesses that want clearer compliance support while staying organised through quarterly and annual obligations."
      },
      overview: {
        title: "What this service covers",
        body:
          "The page focuses on the core work many Australian small businesses need first, while leaving room for future service-page expansion.",
        bullets: [
          "Support for sole traders, companies, and trusts",
          "BAS and GST review or coordination",
          "Tax compliance preparation",
          "Bookkeeping coordination support",
          "Practical guidance for growing small businesses"
        ]
      },
      highlightsTitle: "Support areas",
      highlights: [
        {
          title: "Quarterly and annual compliance",
          description: "Designed to reduce last-minute pressure by keeping reporting cycles and document requests clearer."
        },
        {
          title: "BAS and GST confidence",
          description: "Useful when you need stronger visibility over GST treatment, reporting quality, and follow-through."
        },
        {
          title: "Decision support for owners",
          description: "The work can include practical context around structures, obligations, and what needs attention next."
        }
      ],
      suitableTitle: "Who this is well suited for",
      suitableItems: [
        "Sole traders seeking steadier tax support",
        "Companies and trusts needing organised compliance handling",
        "Founders wanting clearer BAS and GST processes",
        "Businesses that need coordination between records and reporting"
      ],
      faqTitle: "Common questions about business tax",
      faqItems: [
        {
          question: "Do you only prepare returns, or can you help with ongoing tax matters too?",
          answer: "The service is designed to support broader ongoing tax and compliance needs, especially where BAS, GST, or planning conversations are part of the picture."
        },
        {
          question: "Can you work with my existing bookkeeper?",
          answer: "Yes. The service structure includes bookkeeping coordination where that helps improve efficiency and reporting quality."
        },
        {
          question: "Is this suitable for new and growing businesses?",
          answer: "Yes. The positioning is intentionally aligned to small business owners who need practical, ongoing support as the business grows."
        }
      ],
      cta: {
        title: "Need clearer support for your business tax obligations?",
        description: "Outline your structure and current needs and we can guide you on the right next step.",
        primary: { label: "Talk to us", href: "/contact" },
        secondary: { label: "Browse services", href: "/services" }
      }
    },
    atoSupport: {
      metaTitle: "ATO Review and Support Services",
      metaDescription:
        "Practical ATO support for reviews, queries, document requests, and other tax communication matters.",
      hero: {
        eyebrow: "ATO Support",
        title: "Practical support when the ATO needs answers, documents, or a careful response.",
        description:
          "ATO matters often feel stressful because timing, records, and wording all matter. This service is built to bring structure and calm to that process."
      },
      overview: {
        title: "What this service covers",
        body: "The page is designed for clients who need help responding clearly and professionally when ATO communication arrives.",
        bullets: [
          "ATO review support",
          "Tax risk review preparation",
          "Responding to requests for information",
          "Documentation guidance",
          "Practical communication support"
        ]
      },
      highlightsTitle: "Support areas",
      highlights: [
        {
          title: "Reviewing the issue clearly",
          description: "We help identify what the ATO is asking, what documents are relevant, and where the main risks may sit."
        },
        {
          title: "Organising the response",
          description: "Support includes bringing information into a clearer structure so the response process feels more manageable."
        },
        {
          title: "Reducing avoidable stress",
          description: "When expectations and next steps are clear, clients can respond more confidently and with fewer delays."
        }
      ],
      suitableTitle: "Who this is well suited for",
      suitableItems: [
        "Individuals who have received ATO correspondence",
        "Business owners facing review or document requests",
        "Clients who need help understanding what to provide",
        "Anyone wanting a calmer, better organised response process"
      ],
      faqTitle: "Common questions about ATO support",
      faqItems: [
        {
          question: "Can you help even if I have already received a deadline from the ATO?",
          answer: "Yes, although it is best to make contact as soon as possible so the response can be reviewed and organised with enough time."
        },
        {
          question: "What should I send in my enquiry?",
          answer: "Include a short summary of the matter, any ATO letters or notices, and the relevant dates if you have them available."
        },
        {
          question: "Is this only for major disputes?",
          answer: "No. This service also suits earlier-stage reviews, questions, and practical documentation requests."
        }
      ],
      cta: {
        title: "Need help responding to an ATO matter?",
        description: "Send us the basics of the issue and any relevant deadlines so we can advise on the next step.",
        primary: { label: "Contact the practice", href: "/contact" },
        secondary: { label: "Read FAQs", href: "/faq" }
      }
    }
  },
  faqPage: {
    metaTitle: "Frequently Asked Questions",
    metaDescription:
      "Answers to common questions about working with the practice, service scope, and what to prepare before getting in touch.",
    hero: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      description:
        "The FAQ structure is grouped so it can grow later into a stronger content hub for both user experience and search visibility."
    },
    groups: [
      {
        title: "Working with the practice",
        description: "Questions about fit, process, and communication.",
        items: [
          {
            question: "Who do you typically work with?",
            answer: "The site is positioned for individuals, investors, and small businesses, especially clients who value careful guidance and clear communication."
          },
          {
            question: "Do you work with clients outside Melbourne?",
            answer: "Yes. Melbourne is the core local market, but the practice can also support suitable clients across Australia remotely."
          },
          {
            question: "Can I enquire before I have every document ready?",
            answer: "Yes. A short overview is enough to begin and helps us explain what documents and information should come next."
          }
        ]
      },
      {
        title: "Services and scope",
        description: "Questions about what the current service offering includes.",
        items: [
          {
            question: "Do you handle both individual and business tax matters?",
            answer: "Yes. The service structure covers individual tax, business tax, and ATO support, with room to expand into more specialised pages later."
          },
          {
            question: "Can you help with BAS and GST?",
            answer: "Yes. BAS and GST support sit within the business tax service, including review and coordination support."
          },
          {
            question: "Can you help with rental property and investment income?",
            answer: "Yes. The individual tax service is intentionally scoped to include those common higher-complexity areas."
          }
        ]
      },
      {
        title: "Getting started",
        description: "Questions about the enquiry process and what to expect next.",
        items: [
          {
            question: "What should I include in my enquiry?",
            answer: "A summary of your situation, relevant deadlines, and any key documents or ATO correspondence will help us respond more efficiently."
          },
          {
            question: "How quickly will I hear back?",
            answer: "The contact page includes a placeholder response note that can be tailored later once the practice sets its preferred turnaround standard."
          },
          {
            question: "Do you offer bilingual support?",
            answer: "Yes. The website is structured from the beginning for Chinese and English content, which supports a more bilingual-friendly client experience."
          }
        ]
      }
    ],
    cta: {
      title: "Still unsure where your situation fits?",
      description: "Send a short message and we can point you toward the right next step.",
      primary: { label: "Contact us", href: "/contact" },
      secondary: { label: "View services", href: "/services" }
    }
  },
  contactPage: {
    metaTitle: "Contact the Practice",
    metaDescription:
      "Send an enquiry about individual tax, business tax, or ATO support. Built with a clear, validated contact flow ready for future integrations.",
    hero: {
      eyebrow: "Contact",
      title: "Start with a clear enquiry.",
      description:
        "Use the contact form to outline your situation and we can advise on likely scope, next steps, and whether the service is the right fit."
    },
    intro:
      "The form is intentionally simple and conversion-friendly, while still gathering enough detail to support a useful first response.",
    detailsTitle: "Practice details",
    detailsDescription: "Replace the placeholders below once the final business details are ready.",
    details: [
      { label: "Business name", value: business.name },
      { label: "Email", value: business.email, href: `mailto:${business.email}` },
      { label: "Phone", value: business.phone, href: `tel:${business.phone.replace(/\s+/g, "")}` }
    ],
    serviceAreaTitle: "Service area",
    serviceAreaText: `${business.city}, ${business.state}, with remote support for clients across Australia.`,
    formTitle: "Send an enquiry",
    formDescription: "Tell us what you need help with and share any timing or complexity that may be relevant.",
    responseNote: "Placeholder response standard: reply within 1 to 2 business days."
  },
  contactForm: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "Best number to reach you",
    serviceLabel: "Service needed",
    servicePlaceholder: "Select a service",
    messageLabel: "Message",
    messagePlaceholder: "Briefly describe your situation, relevant timing, and any ATO or compliance concerns.",
    honeypotLabel: "Company",
    serviceOptions: ["Individual Tax", "Business Tax", "ATO Support", "BAS / GST", "General enquiry"],
    submitLabel: "Submit enquiry",
    submittingLabel: "Submitting...",
    successTitle: "Thanks for getting in touch.",
    successBody: "Your enquiry has been received. This placeholder workflow is ready to connect to email delivery later.",
    errorTitle: "Something went wrong.",
    errorBody: "Please try again in a moment or contact the practice directly by email.",
    privacyNotice: "By submitting this form, you agree that your details can be used to respond to your enquiry.",
    fieldErrors: {
      name: "Please enter at least 2 characters.",
      email: "Please enter a valid email address.",
      phone: "Please use digits only, with an optional + at the beginning.",
      service: "Please select or enter the service you need.",
      message: "Please provide a little more detail so we can help."
    }
  },
  privacyPage: {
    metaTitle: "Privacy Policy",
    metaDescription:
      "Placeholder privacy policy for an Australian accounting and tax practice, structured for future legal review and final business details.",
    hero: {
      eyebrow: "Privacy",
      title: "Privacy policy",
      description: "A simple but professional placeholder policy ready to be updated with the final practice details and legal review."
    },
    intro:
      "This policy scaffold is intentionally formatted for readability and future legal refinement. It should be reviewed before launch with real business details.",
    sections: [
      {
        title: "Information we collect",
        body: [
          "We may collect personal information that you submit through the website, including your name, email address, phone number, and the details you provide in an enquiry.",
          "We may also collect basic website usage information through analytics tools once those tools are configured."
        ]
      },
      {
        title: "How we use your information",
        body: [
          "Information submitted through the website is used to respond to your enquiry, assess service fit, and communicate about potential services.",
          "Administrative, compliance, and record-keeping purposes may also apply where appropriate."
        ]
      },
      {
        title: "Storage and disclosure",
        body: [
          "Information may be stored in secure business systems used to manage enquiries and client communication.",
          "We do not disclose personal information except where required to provide services, comply with legal obligations, or with your consent."
        ]
      },
      {
        title: "Updates to this policy",
        body: [
          "This privacy policy may be updated from time to time as the practice finalises its systems, providers, and compliance wording.",
          "The latest version should always be published on this page."
        ]
      }
    ],
    contactPrompt: "For privacy questions, please contact the practice using the details listed on the contact page."
  },
  insightsPage: {
    metaTitle: "Insights",
    metaDescription:
      "A future-ready insights hub for articles, FAQs, and educational content related to tax, accounting, and ATO matters.",
    hero: {
      eyebrow: "Insights",
      title: "A content hub ready for future SEO growth.",
      description:
        "The insights section now reads from a local article registry, making future educational content easy to publish and maintain."
    },
    intro:
      "Articles are maintained through local content files, so future blog posts, practical guides, and bilingual educational content can be added without rewriting page components.",
    cards: [
      {
        title: "What to prepare before lodging your tax return",
        excerpt: "A future article scaffold covering document collection, timing, and common mistakes before tax season.",
        category: "Individual tax",
        status: "Draft placeholder"
      },
      {
        title: "BAS and GST basics for growing small businesses",
        excerpt: "A future guide for founders who want a calmer, more reliable BAS workflow as the business becomes more complex.",
        category: "Business tax",
        status: "Draft placeholder"
      },
      {
        title: "How to respond when the ATO requests information",
        excerpt: "A future article outlining the first practical steps to take when correspondence arrives from the ATO.",
        category: "ATO support",
        status: "Draft placeholder"
      }
    ],
    cta: {
      title: "Need help before the knowledge base is expanded?",
      description: "The site already includes service pages and a validated enquiry form so clients can still reach out directly.",
      primary: { label: "Contact the practice", href: "/contact" },
      secondary: { label: "Browse services", href: "/services" }
    }
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for may have moved, or it may not exist yet in this early website scaffold.",
    primary: { label: "Go home", href: "" },
    secondary: { label: "View services", href: "/services" }
  }
} satisfies Dictionary;
