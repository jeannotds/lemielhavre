# Configuration de l'envoi d'emails

## Étapes pour configurer l'envoi d'emails via le formulaire de contact

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Obtenir votre clé API
<!-- re_TzsnmS9s_E5oFcXtn7DGTUamgHXpLAEWN -->

1. Une fois connecté, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Donnez un nom à votre clé (ex: "Le Miel Havre Production")
4. Copiez la clé API (elle commence par `re_`)

### 3. Configurer la variable d'environnement

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez votre clé API :

```env
RESEND_API_KEY=re_votre_cle_api_ici
```

### 4. Vérifier votre domaine (Optionnel mais recommandé)

Pour utiliser votre propre domaine d'email au lieu de `onboarding@resend.dev` :

1. Allez dans **Domains** sur Resend
2. Ajoutez votre domaine
3. Suivez les instructions pour vérifier votre domaine via DNS
4. Une fois vérifié, modifiez le fichier `app/api/send-email/route.ts` :
   - Remplacez `'Le Miel Havre <onboarding@resend.dev>'` par `'Le Miel Havre <noreply@votredomaine.com>'`

### 5. Tester le formulaire

1. Démarrez votre serveur de développement : `npm run dev`
2. Allez sur la page de contact : `http://localhost:3000/contact`
3. Remplissez et envoyez le formulaire
4. Vérifiez que vous recevez bien l'email à `diambujeannotarobalse@gmail.com`

## Fonctionnalités

- ✅ Envoi automatique d'email à l'administrateur avec tous les détails du formulaire
- ✅ Email de confirmation automatique envoyé à l'utilisateur
- ✅ Design HTML professionnel pour les emails
- ✅ Validation des champs requis
- ✅ Gestion des erreurs avec messages clairs
- ✅ Interface utilisateur avec feedback visuel (succès/erreur)

## Notes importantes

- Le compte gratuit de Resend permet d'envoyer jusqu'à 100 emails par jour
- Pour la production, vérifiez votre domaine pour une meilleure délivrabilité
- Les emails sont envoyés depuis `onboarding@resend.dev` par défaut (mode test)
- Vous pouvez répondre directement aux emails reçus pour contacter les utilisateurs

