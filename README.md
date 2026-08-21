# Shifatek

Site vitrine Shifatek — Vite + React + TypeScript.

## Développement

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
```

Les fonctions du dossier `api/` sont servies en local par un pont dans
`vite.config.ts`, et par Vercel en production.

## Formulaire de contact (Resend)

À l'envoi du formulaire, `api/contact.ts` déclenche deux e-mails via
[Resend](https://resend.com/docs/api-reference/introduction) :

1. un accusé de réception au visiteur, depuis `noreply@shifatek.com` ;
2. une notification à `contact@shifatek.com`, avec `reply_to` sur l'adresse
   du visiteur.

### Mise en service

1. Vérifier le domaine `shifatek.com` dans Resend (DNS : SPF, DKIM). Sans
   cela, l'envoi depuis `noreply@shifatek.com` est refusé.
2. Créer une clé d'API et la déclarer comme variable d'environnement
   `RESEND_API_KEY` — dans Vercel (Project Settings → Environment Variables)
   et, pour le développement, dans un fichier `.env` local (voir
   `.env.example`). **Cette clé ne doit jamais être commitée.**

Sans clé : en développement l'envoi est simulé et le formulaire répond
`{ ok: true, dryRun: true }` ; en production la route renvoie une erreur 500
plutôt que de faire croire à un envoi réussi.
