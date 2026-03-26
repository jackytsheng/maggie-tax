export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface ServiceCardCopy {
  title: string;
  description: string;
  href: string;
  tag: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

export interface InsightCardCopy {
  title: string;
  excerpt: string;
  category: string;
  status: string;
}

export interface PrivacySection {
  title: string;
  body: string[];
}

export interface PageHeroCopy {
  eyebrow: string;
  title: string;
  description: string;
}

export interface CtaSectionCopy {
  title: string;
  description: string;
  primary: CtaLink;
  secondary?: CtaLink;
}

export interface ServiceDetailCopy {
  metaTitle: string;
  metaDescription: string;
  hero: PageHeroCopy;
  overview: {
    title: string;
    body: string;
    bullets: string[];
  };
  highlightsTitle: string;
  highlights: HighlightItem[];
  suitableTitle: string;
  suitableItems: string[];
  faqTitle: string;
  faqItems: FaqItem[];
  cta: CtaSectionCopy;
}

export interface Dictionary {
  localeLabel: string;
  meta: {
    siteDescription: string;
    keywords: string[];
  };
  nav: {
    links: NavLink[];
    ctaLabel: string;
    mobileMenuLabel: string;
    languageSwitcherLabel: string;
  };
  common: {
    homeLabel: string;
    skipToContent: string;
    learnMore: string;
    exploreServices: string;
    contactUs: string;
    readMore: string;
    viewAllFaqs: string;
    processLabel: string;
    serviceLabel: string;
    emailLabel: string;
    phoneLabel: string;
    closeLabel: string;
    openLabel: string;
    comingSoon: string;
    notProvided: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    serviceAreaLabel: string;
    privacyLabel: string;
    rightsReserved: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primary: CtaLink;
      secondary: CtaLink;
      trustPoints: string[];
    panel: {
      title: string;
      description: string;
      expectationsLabel: string;
      summaryLabel: string;
    };
      quickLinks: {
        title: string;
        description: string;
      };
    };
    trustBar: string[];
    services: {
      eyebrow: string;
      title: string;
      description: string;
      cards: ServiceCardCopy[];
    };
    values: {
      eyebrow: string;
      title: string;
      description: string;
      items: HighlightItem[];
    };
    audiences: {
      eyebrow: string;
      title: string;
      description: string;
      items: AudienceItem[];
    };
    process: {
      eyebrow: string;
      title: string;
      description: string;
      steps: StepItem[];
    };
    faqPreview: {
      eyebrow: string;
      title: string;
      description: string;
      items: FaqItem[];
    };
    cta: CtaSectionCopy;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    hero: PageHeroCopy;
    founder: {
      title: string;
      role: string;
      summary: string[];
      warmNote: string;
    };
    philosophy: {
      title: string;
      description: string;
      items: HighlightItem[];
    };
    qualifications: {
      title: string;
      description: string;
      items: string[];
    };
    reasons: {
      title: string;
      description: string;
      items: HighlightItem[];
    };
    cta: CtaSectionCopy;
  };
  servicesPage: {
    metaTitle: string;
    metaDescription: string;
    hero: PageHeroCopy;
    intro: string;
    cards: ServiceCardCopy[];
    supportAreas: {
      title: string;
      description: string;
      items: string[];
    };
    process: {
      title: string;
      description: string;
      steps: StepItem[];
    };
    cta: CtaSectionCopy;
  };
  serviceDetails: {
    individualTax: ServiceDetailCopy;
    businessTax: ServiceDetailCopy;
    atoSupport: ServiceDetailCopy;
  };
  faqPage: {
    metaTitle: string;
    metaDescription: string;
    hero: PageHeroCopy;
    groups: Array<{
      title: string;
      description: string;
      items: FaqItem[];
    }>;
    cta: CtaSectionCopy;
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    hero: PageHeroCopy;
    intro: string;
    detailsTitle: string;
    detailsDescription: string;
    details: ContactDetail[];
    serviceAreaTitle: string;
    serviceAreaText: string;
    formTitle: string;
    formDescription: string;
    responseNote: string;
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    honeypotLabel: string;
    serviceOptions: string[];
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    privacyNotice: string;
  };
  privacyPage: {
    metaTitle: string;
    metaDescription: string;
    hero: PageHeroCopy;
    intro: string;
    sections: PrivacySection[];
    contactPrompt: string;
  };
  insightsPage: {
    metaTitle: string;
    metaDescription: string;
    hero: PageHeroCopy;
    intro: string;
    cards: InsightCardCopy[];
    cta: CtaSectionCopy;
  };
  notFound: {
    title: string;
    description: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
}
