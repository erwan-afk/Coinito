# Configuration des variables d'environnement

## Fichier .env

Créez un fichier `.env` à la racine du projet avec le contenu suivant :

```
VITE_COINGECKO_API_KEY=votre_cle_api_ici
```

## Obtention de la clé API

1. Allez sur [CoinGecko API](https://www.coingecko.com/en/api)
2. Créez un compte ou connectez-vous
3. Obtenez votre clé API
4. Ajoutez-la dans le fichier `.env`

## Important

- Le fichier `.env` est ignoré par Git (déjà configuré dans `.gitignore`)
- Ne partagez jamais votre clé API publiquement
- Pour la production, configurez les variables d'environnement sur votre plateforme d'hébergement

