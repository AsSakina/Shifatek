// Full English copy. Mirrors content.fr.ts exactly: same keys, same shape —
// keep both in sync when the copy changes.

export const content = {
  meta: {
    title: 'Shifatek — Digital Health and Innovation',
    description: 'Shifatek designs digital health tools for West Africa.',
  },

  nav: [
    { label: 'Mission', href: '/en#mission' },
    { label: 'APHIA Care', href: '/en/aphia' },
    { label: 'Ilmia', href: '/en/ilmia' },
    { label: 'Training', href: '/en/formations' },
  ],

  navCta: 'Contact us',

  ui: {
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    lightTheme: 'Light theme',
    darkTheme: 'Dark theme',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
  },

  hero: {
    eyebrow: 'Digital health · West Africa',
    titleBefore: 'Health technology, designed ',
    titleEm: 'from the ground up',
    titleAfter: '.',
    text: 'Shifatek designs digital health tools and innovative solutions for West Africa, starting from the real needs of pharmacies, health workers, students, private companies, and health organizations (ministries, NGOs…), rather than importing ready-made solutions.',
    primaryCta: 'Discover our mission',
    secondaryCta: 'Contact us',
  },

  mission: {
    eyebrow: 'Our conviction',
    title: 'Start from real needs, not import ready-made solutions.',
    paragraphs: [
      "Too many digital health tools are designed elsewhere, for contexts that aren't ours: constant connectivity assumed, different regulatory realities, use cases far removed from the field.",
      'At Shifatek, every product starts from a problem observed directly in Senegal: in a pharmacy, a medical school, a private company, a health organization (ministry, NGO…). It’s built with the people involved, which is what makes our tools genuinely useful, and adopted.',
    ],
  },

  productsIntro: {
    eyebrow: 'Our solutions',
    title: 'One mission, concrete expressions.',
    text: 'Every Shifatek product answers a need observed on the ground of health in West Africa.',
  },

  products: [
    {
      id: 'aphia',
      tone: 'aphia',
      tag: 'Digital health · in production',
      title: 'APHIA Care',
      text: 'The ERP that digitizes pharmacy management in Senegal: stock, sales, receiving. Built offline-first, it keeps working without a stable connection and syncs the moment the network is back.',
      status: 'Deployed and in pilot phase',
    },
    {
      id: 'ilmia',
      tone: 'ilmia',
      tag: 'Learning · in development',
      title: 'Ilmia',
      text: 'An assistant that trains students and health professionals through play: interactive clinical scenarios, AI-guided, grounded in the conditions of the West African context.',
      status: 'In design',
    },
  ],

  about: {
    eyebrow: 'The team',
    title: 'A team at the crossroads of tech, health, and the Senegalese field.',
    paragraphs: [
      'Based in Dakar, Shifatek brings together solid technical expertise (data science, development, AI) and a close understanding of health realities in West Africa.',
      'We build to one standard: every tool has to work in the real world, not just in a demo.',
    ],
  },

  values: [
    ['Rigor', 'Products tested in real field conditions, not just in theory.'],
    ['Accessibility', 'Tools designed for patchy connectivity and everyday, concrete use.'],
    ['Local impact', 'Solutions that answer West Africa’s needs, built from within West Africa.'],
    ['Innovation', 'AI and digital technology put to work for health and education.'],
  ],

  capabilities: {
    eyebrow: 'Today',
    title: 'Everything you need, in one place.',
  },

  roadmap: {
    eyebrow: 'Tomorrow · APHIA V2',
    title: 'A platform that grows with your pharmacy.',
    text: 'These features are our roadmap: they extend APHIA Care’s operational foundation toward a more clinical, collaborative, and intelligent vision.',
    features: [
      'Clinical patient records',
      'Drug interaction checker',
      'Advanced accounting and unpaid-invoice tracking',
      'Inter-pharmacy network',
      'Business analytics and AI assistant',
      'Backup, export, and immutable audit log',
      'Supplier advertising and HR management',
    ],
  },

  productPages: {
    aphia: {
      name: 'APHIA Care',
      kicker: 'Pharmacy management system',
      title: 'Your pharmacy keeps running, even offline.',
      intro: 'APHIA Care brings stock, sales, finances, and teams together in one place, built for the realities of running a pharmacy in Senegal. Everything keeps working offline, and syncs the moment the network is back.',
      accent: 'teal',
      cta: 'Open aphia.care',
      ctaHref: 'https://aphia.care',
      secondary: 'Book a demo',
      secondaryHref: '#contact',
      features: [
        'Stock by batch, expiry date, and location',
        'Receiving, transfers, imports, and negative-stock handling',
        'Point of sale, carts, payments, and till closing',
        'Patient credit, insurance accounts, receivables, and expenses',
        'Alerts, sales history, and full auditability',
      ],
    },
    ilmia: {
      name: 'Ilmia',
      kicker: 'Clinical training through simulation',
      title: 'Train your clinical reasoning, one case at a time.',
      intro: 'Ilmia turns the medical curriculum into cases to solve: patient simulations, inter-faculty tournaments, and adaptive tutoring, built with experts and grounded in West African conditions.',
      accent: 'indigo',
      cta: 'Talk to the team',
      ctaHref: '/en#contact',
      secondary: 'Join the pilot cohort',
      secondaryHref: '/en#contact',
      features: [
        'Studio for expert-validated playable content',
        'Arena: inter-faculty leagues and tournaments',
        'Patient: conversational simulation',
        'Coach: adaptive tutoring and spaced repetition',
      ],
    },
    formations: {
      name: 'Training',
      kicker: 'Data & AI training',
      title: 'Learn data and AI, without the jargon.',
      intro: 'Shifatek trains teams, executives, and individuals in the fundamentals of data and artificial intelligence: hands-on sessions, designed for beginners, grounded in real cases rather than theory.',
      accent: 'mint',
      cta: 'Book a session',
      ctaHref: '/en#contact',
      secondary: 'Get notified of upcoming sessions',
      secondaryHref: '/en#contact',
      features: [
        'Data fundamentals: collection, structuring, visualization',
        'Hands-on introduction to machine learning and generative AI',
        'Workshops on real cases, designed for beginners',
        'Short formats, in person or remote',
      ],
    },
  },

  productNav: {
    features: 'Features',
    roadmap: 'Coming up',
    contact: 'Let’s talk',
    back: 'Back to home',
  },

  productContact: {
    eyebrow: 'Let’s talk',
    title: 'Ready for the next step?',
    text: 'A question, a project, or just curious to learn more: write to us.',
  },

  contact: {
    eyebrow: 'Let’s talk',
    title: 'Let’s build tomorrow’s digital health, together.',
    text: 'A project, a partnership, training for your teams? Write to us, we’ll get back to you quickly.',
    locationLabel: 'Based in',
    location: 'Dakar, Senegal',
    emailLabel: 'Email',
    email: 'contact@shifatek.com',
    submit: 'Send message',
    sending: 'Sending…',
    sentNote: 'Thank you! Your message is on its way. You’ll receive a confirmation by email.',
    errorNote: 'Sending failed. Try again, or email us directly at contact@shifatek.com.',
  },

  formFields: [
    { id: 'name', label: 'Name', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
    { id: 'company', label: 'Company (optional)', type: 'text', required: false },
  ],

  messageField: { id: 'message', label: 'Message' },

  footer: {
    contactLink: 'Contact',
    legal: '© 2026 Shifatek, Dakar, Senegal. All rights reserved.',
  },

  researchIntro: {
    eyebrow: 'Research',
    title: 'Health deserves rigorous research.',
    text: 'Shifatek sees health as a field that demands scientific rigor and ongoing research, not just products. It’s a long-term ambition, already carried forward today through two directions our team is exploring.',
  },

  research: [
    {
      id: 'tb-cxr',
      tag: 'AI-assisted diagnosis',
      title: 'Tuberculosis screening through chest X-ray analysis',
      text: 'Senegal reports around 132 tuberculosis cases per 100,000 people. Chest X-ray remains the only imaging exam commonly available for screening, but existing AI models, trained on non-African data, lose reliability in this context. We’re exploring lightweight deep learning methods, adapted to the variable-quality X-rays found in the field.',
    },
    {
      id: 'gyfawo',
      tag: 'Clinical AI & telemedicine',
      title: 'GYFAWO: AI- and telemedicine-based gynecological support',
      text: 'In remote areas of Senegal, 68% of specialists are concentrated in Dakar. GYFAWO explores a system combining a clinical-support AI agent with telemedicine services, to strengthen midwives and nurses at health posts in prenatal care.',
    },
  ],

  chatbot: {
    label: 'Shifatek Assistant',
    greeting: 'Hi! I’m the Shifatek assistant. Pick a question below.',
    openLabel: 'Open the Shifatek assistant',
    closeLabel: 'Close the assistant',
    resetLabel: 'Ask another question',
  },

  chatTopics: [
    {
      id: 'mission',
      question: 'What is your mission?',
      answer: 'We start from real needs observed in the field (pharmacies, health workers, students, companies, health organizations) rather than importing ready-made solutions.',
      link: { label: 'Learn more', href: '/en#mission' } as { label: string; href: string } | undefined,
    },
    {
      id: 'aphia',
      question: 'Tell me about APHIA Care',
      answer: 'APHIA Care is our ERP for pharmacies in Senegal: stock, sales, receiving. Built offline-first, it keeps working even without a stable connection.',
      link: { label: 'Discover APHIA Care', href: '/en/aphia' } as { label: string; href: string } | undefined,
    },
    {
      id: 'ilmia',
      question: 'Tell me about Ilmia',
      answer: 'Ilmia trains students and health professionals through play: interactive clinical scenarios, AI-guided, grounded in the West African context.',
      link: { label: 'Discover Ilmia', href: '/en/ilmia' } as { label: string; href: string } | undefined,
    },
    {
      id: 'formations',
      question: 'Do you offer training?',
      answer: 'Yes: data and AI sessions for teams, executives, and individuals. Hands-on, designed for beginners, grounded in real cases.',
      link: { label: 'Discover our training', href: '/en/formations' } as { label: string; href: string } | undefined,
    },
    {
      id: 'contact',
      question: 'How can I contact you?',
      answer: 'The simplest way is the contact form, or email us directly at contact@shifatek.com. We reply quickly.',
      link: { label: 'Open the form', href: '/en#contact' } as { label: string; href: string } | undefined,
    },
    {
      id: 'location',
      question: 'Where are you based?',
      answer: 'We’re a team based in Dakar, Senegal, working in service of health across West Africa.',
      link: undefined as { label: string; href: string } | undefined,
    },
  ],
} as const
