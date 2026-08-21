// Toute la copie du site. Les textes sont repris tels quels — ne pas reformuler
// sans validation éditoriale.

export const nav = [
  { label: 'Mission', href: '/#mission' },
  { label: 'APHIA Care', href: '/aphia' },
  { label: 'Ilmia', href: '/ilmia' },
  { label: 'Formations', href: '/formations' },
] as const

export const navCta = 'Nous contacter'

export const hero = {
  eyebrow: "Santé digitale · Afrique de l'Ouest",
  titleBefore: 'La technologie de santé, pensée ',
  titleEm: 'depuis le terrain',
  titleAfter: '.',
  text: "Shifatek conçoit des outils de santé digitale et des solutions innovantes pour l'Afrique de l'Ouest — en partant des besoins réels des pharmacies, des soignants, des étudiants, des entreprises privées et des organisations sanitaires (ministère, ONG…), plutôt que de solutions importées.",
  primaryCta: 'Découvrir notre mission',
  secondaryCta: 'Nous contacter ',
} as const

export const mission = {
  eyebrow: 'Notre conviction',
  title: 'Partir des besoins réels, pas importer des solutions toutes faites.',
  paragraphs: [
    "Trop d'outils numériques de santé sont pensés ailleurs, pour des contextes qui ne sont pas les nôtres : connexion permanente supposée, réalités réglementaires différentes, usages éloignés du terrain.",
    "Chez Shifatek, chaque produit naît d'un problème observé directement au Sénégal — dans une pharmacie, une faculté de médecine, une entreprise privée, une organisation sanitaire (ministère, ONG…) — et se construit avec les personnes concernées. C'est ce qui rend nos outils réellement utiles, et adoptés.",
  ],
} as const

export const productsIntro = {
  eyebrow: 'Nos solutions',
  title: 'Une mission, des expressions concrètes.',
  text: "Chaque produit Shifatek répond à un besoin observé sur le terrain de la santé en Afrique de l'Ouest.",
} as const

export const products = [
  {
    id: 'aphia',
    tone: 'aphia',
    tag: 'Santé digitale · en production',
    title: 'APHIA Care',
    text: "L'ERP qui digitalise la gestion des pharmacies sénégalaises : stock, ventes, réception. Conçu offline-first, il fonctionne même sans connexion stable et se synchronise dès le retour du réseau.",
    status: 'Déployé et en phase pilote',
  },
  {
    id: 'ilmia',
    tone: 'ilmia',
    tag: 'Apprentissage · en construction',
    title: 'Ilmia',
    text: "Un assistant qui forme les étudiants et professionnels de santé par le jeu : des scénarios cliniques interactifs, guidés par l'IA, ancrés dans les pathologies du contexte ouest-africain.",
    status: 'En conception',
  },
] as const

export const about = {
  eyebrow: "L'équipe",
  title: 'Une équipe entre la tech, la santé et le terrain sénégalais.',
  paragraphs: [
    "Basée à Dakar, Shifatek réunit une expertise technique réelle — data science, développement, IA — et une connaissance intime des réalités de la santé en Afrique de l'Ouest.",
    'Nous construisons avec une exigence : chaque outil doit fonctionner dans le monde réel, pas seulement en démonstration.',
  ],
} as const

export const values = [
  ['Rigueur', 'Des produits testés dans les conditions réelles du terrain, pas seulement en théorie.'],
  ['Accessibilité', 'Des outils pensés pour une connectivité variable et des usages concrets.'],
  ['Impact local', "Des solutions qui répondent aux besoins de l'Afrique de l'Ouest, depuis l'Afrique de l'Ouest."],
  ['Innovation', "L'IA et le digital mis au service de la santé et de la formation."],
] as const

/** « Aujourd'hui » — ce que le produit fait déjà, sur la page d'accueil. */
export const capabilities = {
  eyebrow: 'Aujourd’hui',
  title: 'Tout ce dont votre équipe a besoin, au même endroit.',
} as const

/** « Demain » — la feuille de route, réservée à la page APHIA Care. */
export const roadmap = {
  eyebrow: 'Demain · APHIA V2',
  title: 'Une plateforme qui grandit avec votre officine.',
  text: 'Ces fonctionnalités sont notre feuille de route : elles prolongent la base opérationnelle d’APHIA Care vers une vision plus clinique, collaborative et intelligente.',
  features: [
    'Dossier patient clinique',
    'Vérificateur d’interactions médicamenteuses',
    'Comptabilité avancée et suivi des impayés',
    'Réseau inter-pharmacies',
    'Analytique métier et assistant IA',
    'Sauvegarde, export et journal d’audit immuable',
    'Publicité fournisseurs et gestion RH',
  ],
} as const

/** Pages produit : /aphia et /ilmia. */
export const productPages = {
  aphia: {
    name: 'APHIA Care',
    kicker: 'Système de gestion officinale',
    title: 'Votre officine tourne, même sans réseau.',
    intro: 'APHIA Care réunit stocks, ventes, finances et équipes dans un seul espace, pensé pour les réalités de l’officine au Sénégal. Tout continue hors ligne, et se synchronise dès le retour du réseau.',
    accent: 'teal',
    cta: 'Ouvrir aphia.care',
    ctaHref: 'https://aphia.care',
    secondary: 'Réserver une démo',
    secondaryHref: '#contact',
    features: [
      'Stocks par lot, expiration et emplacement',
      'Réception, transferts, imports et gestion du stock négatif',
      'Point de vente, paniers, paiements et clôture de caisse',
      'Crédits patients, comptes mutuelles, créances et dépenses',
      'Alertes, historique des ventes et auditabilité complète',
    ],
  },
  ilmia: {
    name: 'Ilmia',
    kicker: 'Entraînement clinique par la simulation',
    title: 'Formez votre raisonnement clinique, un cas à la fois.',
    intro: 'Ilmia transforme le cours de médecine en cas à résoudre : simulation de patients, tournois entre facultés et tutorat adaptatif, construits avec des experts et ancrés dans les pathologies ouest-africaines.',
    accent: 'indigo',
    cta: 'Découvrir Ilmia',
    ctaHref: '/#contact',
    secondary: 'Rejoindre la cohorte pilote',
    secondaryHref: '/#contact',
    features: [
      'Studio de contenus jouables validés par des experts',
      'Arena : ligues et tournois inter-facultés',
      'Patient : simulation conversationnelle',
      'Coach : tutorat adaptatif et répétition espacée',
    ],
  },
  formations: {
    name: 'Formations',
    kicker: 'Formation data & IA',
    title: 'Apprendre la donnée et l’IA, sans jargon inutile.',
    intro: 'Dans l’esprit des ateliers menés avec Gomycode, Shifatek forme équipes, dirigeants et particuliers aux fondamentaux de la donnée et de l’intelligence artificielle — des sessions concrètes, pensées pour des débutants, ancrées dans des cas réels plutôt que dans la théorie.',
    accent: 'mint',
    cta: 'Réserver une session',
    ctaHref: '/#contact',
    secondary: 'Être informé des prochaines sessions',
    secondaryHref: '/#contact',
    features: [
      'Fondamentaux de la donnée : collecte, structuration, visualisation',
      'Introduction pratique au machine learning et à l’IA générative',
      'Ateliers sur cas réels, pensés pour les débutants',
      'Formats courts, en présentiel ou à distance',
    ],
  },
} as const

export type ProductId = keyof typeof productPages

export const productNav = {
  features: 'Fonctionnalités',
  roadmap: 'À venir',
  contact: 'Parlons-en',
  back: 'Retour à l’accueil',
} as const

export const productContact = {
  eyebrow: 'Échangeons',
  title: 'Prêt à faire le prochain pas ?',
  text: 'Une démo, une question ou un contexte particulier : écrivez-nous.',
} as const

export const contact = {
  eyebrow: 'Parlons-en',
  title: 'Construisons la santé digitale de demain, ensemble.',
  text: 'Un projet, un partenariat, une formation pour vos équipes ? Écrivez-nous, nous vous répondrons rapidement.',
  locationLabel: 'Basés à',
  location: 'Dakar, Sénégal',
  emailLabel: 'E-mail',
  email: 'contact@shifatek.com',
  submit: 'Envoyer le message',
  sending: 'Envoi en cours…',
  sentNote: 'Merci ! Votre message est parti. Vous recevez une confirmation par e-mail.',
  errorNote: 'L’envoi a échoué. Réessayez, ou écrivez-nous à contact@shifatek.com.',
} as const

export const formFields = [
  { id: 'name', label: 'Nom', type: 'text', required: true },
  { id: 'email', label: 'E-mail', type: 'email', required: true },
  { id: 'company', label: 'Entreprise (facultatif)', type: 'text', required: false },
] as const

export const messageField = { id: 'message', label: 'Message' } as const

export const footer = {
  contactLink: 'Contact',
  legal: '© 2026 Shifatek — Dakar, Sénégal. Tous droits réservés.',
} as const

/** Recherche appliquée : une ambition d'entreprise, au-delà des produits. */
export const researchIntro = {
  eyebrow: 'Recherche',
  title: 'La santé mérite une recherche exigeante.',
  text: 'Shifatek considère la santé comme un domaine qui exige rigueur scientifique et recherche continue — pas seulement des produits. C’est une ambition de long terme, portée dès aujourd’hui à travers deux axes explorés par notre équipe.',
} as const

export const research = [
  {
    id: 'tb-cxr',
    tag: 'Diagnostic assisté par IA',
    title: 'Dépistage de la tuberculose par analyse de radiographies thoraciques',
    text: 'Le Sénégal recense environ 132 cas de tuberculose pour 100 000 habitants. La radiographie thoracique reste le seul examen d’imagerie couramment accessible pour le dépistage, mais les modèles d’IA existants, entraînés sur des données non africaines, perdent en fiabilité dans ce contexte. Nous explorons des méthodes d’apprentissage profond légères, adaptées aux radiographies de qualité variable rencontrées sur le terrain.',
  },
  {
    id: 'gyfawo',
    tag: 'IA clinique & télémédecine',
    title: 'GYFAWO — Assistance gynécologique par IA et télémédecine',
    text: 'Dans les zones reculées du Sénégal, 68 % des spécialistes sont concentrés à Dakar. GYFAWO explore un dispositif combinant un agent IA d’appui clinique et des services de télémédecine, pour renforcer les sages-femmes et infirmiers des postes de santé dans le suivi prénatal.',
  },
] as const

/** Assistant FAQ (bulle de chat) — réponses prédéfinies, aucune IA générative. */
export const chatbot = {
  label: 'Assistant Shifatek',
  greeting: 'Bonjour ! Je suis l’assistant Shifatek. Choisis une question ci-dessous.',
  openLabel: 'Ouvrir l’assistant Shifatek',
  closeLabel: 'Fermer l’assistant',
  resetLabel: 'Poser une autre question',
} as const

export const chatTopics = [
  {
    id: 'mission',
    question: 'Quelle est votre mission ?',
    answer: 'Nous partons des besoins réels observés sur le terrain — pharmacies, facultés de médecine — plutôt que d’importer des solutions toutes faites.',
    link: { label: 'En savoir plus', href: '/#mission' },
  },
  {
    id: 'aphia',
    question: 'Parle-moi d’APHIA Care',
    answer: 'APHIA Care est notre ERP pour les pharmacies sénégalaises : stock, ventes, réception. Conçu offline-first, il fonctionne même sans connexion stable.',
    link: { label: 'Découvrir APHIA Care', href: '/aphia' },
  },
  {
    id: 'ilmia',
    question: 'Parle-moi d’Ilmia',
    answer: 'Ilmia forme les étudiants et professionnels de santé par le jeu : des scénarios cliniques interactifs, guidés par l’IA, ancrés dans le contexte ouest-africain.',
    link: { label: 'Découvrir Ilmia', href: '/ilmia' },
  },
  {
    id: 'contact',
    question: 'Comment vous contacter ?',
    answer: 'Le plus simple est d’utiliser le formulaire de contact, ou de nous écrire directement à contact@shifatek.com — nous répondons rapidement.',
    link: { label: 'Ouvrir le formulaire', href: '/#contact' },
  },
  {
    id: 'location',
    question: 'Où êtes-vous basés ?',
    answer: 'Nous sommes une équipe basée à Dakar, au Sénégal, au service de la santé en Afrique de l’Ouest.',
    link: undefined,
  },
] as const

