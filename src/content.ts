// Toute la copie du site. Les textes sont repris tels quels — ne pas reformuler
// sans validation éditoriale.

export const nav = [
  { label: 'Mission', href: '/#mission' },
  { label: 'APHIA Care', href: '/aphia' },
  { label: 'Ilmia', href: '/ilmia' },
] as const

export const navCta = 'Nous contacter'

export const hero = {
  eyebrow: "Santé digitale · Afrique de l'Ouest",
  titleBefore: 'La technologie de santé, pensée ',
  titleEm: 'depuis le terrain',
  titleAfter: '.',
  text: "Shifatek conçoit des outils de santé digitale et des solutions innovantes pour l'Afrique de l'Ouest — en partant des besoins réels des pharmacies, des soignants et des étudiants, plutôt que de solutions importées.",
  primaryCta: 'Découvrir notre mission',
  secondaryCta: 'Nous contacter ',
} as const

export const mission = {
  eyebrow: 'Notre conviction',
  title: 'Partir des besoins réels, pas importer des solutions toutes faites.',
  paragraphs: [
    "Trop d'outils numériques de santé sont pensés ailleurs, pour des contextes qui ne sont pas les nôtres : connexion permanente supposée, réalités réglementaires différentes, usages éloignés du terrain.",
    "Chez Shifatek, chaque produit naît d'un problème observé directement au Sénégal — dans une pharmacie, une faculté de médecine, une entreprise — et se construit avec les personnes concernées. C'est ce qui rend nos outils réellement utiles, et adoptés.",
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
    secondary: 'Book a demo',
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
    ctaHref: 'https://contact.shifatek.com',
    secondary: 'Rejoindre la cohorte pilote',
    secondaryHref: 'https://contact.shifatek.com',
    features: [
      'Studio de contenus jouables validés par des experts',
      'Arena : ligues et tournois inter-facultés',
      'Patient : simulation conversationnelle',
      'Coach : tutorat adaptatif et répétition espacée',
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

