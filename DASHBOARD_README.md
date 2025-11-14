# Dashboard Crypto - Documentation

## 🚀 Nouveau Dashboard Moderne

J'ai créé une nouvelle page dashboard crypto moderne utilisant **shadcn-vue** et **Tailwind CSS** !

## 📍 Accès au Dashboard

### URL
```
http://localhost:5173/dashboard/{coinId}
```

### Exemples
- Bitcoin: `http://localhost:5173/dashboard/bitcoin`
- Ethereum: `http://localhost:5173/dashboard/ethereum`
- Solana: `http://localhost:5173/dashboard/solana`

## ✨ Fonctionnalités

### 1. **Header avec Image et Rank**
- Logo de la crypto
- Nom et symbole
- Classement market cap

### 2. **Prix Actuel**
- Prix en EUR avec formatage
- Badge de variation 24h (vert/rouge)
- Prix high/low 24h

### 3. **Statistiques du Marché** (4 cartes)
- Market Cap avec variation 24h
- Volume 24h
- Circulating Supply / Max Supply
- Fully Diluted Valuation (FDV)

### 4. **Performance des Prix**
- Variations: 1h, 24h, 7d, 30d, 1y
- Badges colorés (vert/rouge)

### 5. **All-Time High & Low**
- Prix ATH/ATL avec date
- Distance depuis ATH/ATL en %
- Design avec gradient vert/rouge

### 6. **Données Communauté**
- Twitter Followers
- Reddit Subscribers
- Telegram Members

### 7. **Données Développement**
- GitHub Stars
- Forks
- Commits des 4 dernières semaines

### 8. **Catégories**
- Tags de catégories (DeFi, Layer 1, etc.)

## 🎨 Composants Créés

### Composants UI shadcn-vue
```
src/components/ui/
├── card/
│   ├── Card.vue
│   ├── CardHeader.vue
│   ├── CardTitle.vue
│   └── CardContent.vue
└── badge/
    └── Badge.vue
```

### Service API
```javascript
src/services/api/CoinDashboardRepository.js
```

## 🎯 Utilisation de l'API CoinGecko

Le dashboard utilise l'endpoint `/coins/{id}` avec les paramètres :
- `localization: false` - Pas de traductions
- `tickers: false` - Pas de données de tickers
- `market_data: true` - Données de marché ✅
- `community_data: true` - Données communauté ✅
- `developer_data: true` - Données développeur ✅
- `sparkline: false` - Pas de sparkline

## 🎨 Design

### Couleurs
- **Fond**: Noir (`bg-black`)
- **Cartes**: Gris foncé avec bordures (`bg-gray-900`, `border-gray-700`)
- **Hover**: Bordures plus claires (`hover:border-gray-600`)
- **Vert**: Prix positifs (`text-green-500`, `bg-green-500`)
- **Rouge**: Prix négatifs (`text-red-500`, `bg-destructive`)

### Responsive
- Mobile: 1 colonne
- Tablette (md): 2 colonnes
- Desktop (lg): 4 colonnes pour les stats

### Animations
- Transitions sur hover
- Badges avec focus ring

## 📊 Formatage

### Prix
```javascript
formatCurrency(value) // → €69,840.00
```

### Grands Nombres
```javascript
formatLargeNumber(value) 
// 1,000,000,000 → 1.00B
// 1,000,000 → 1.00M
// 1,000 → 1.00K
```

### Dates
```javascript
formatDate(dateString) // → 14 mars 2024
```

## 🔧 Personnalisation

### Changer la devise
Dans `coin-dashboard.vue`, remplacer `eur` par `usd` :
```javascript
coinData.market_data.current_price.usd
```

### Ajouter des périodes
Dans `pricePerformances` computed :
```javascript
{
    label: '60d',
    value: this.coinData.market_data.price_change_percentage_60d || 0,
}
```

### Ajouter des cartes
Utiliser les composants shadcn :
```vue
<Card class="bg-gray-900 border-gray-700">
    <CardHeader>
        <CardTitle>Nouveau Titre</CardTitle>
    </CardHeader>
    <CardContent>
        <!-- Contenu -->
    </CardContent>
</Card>
```

## 🚀 Navigation

Pour ajouter un lien depuis la page d'accueil ou coin :
```vue
<router-link :to="{ name: 'CoinDashboard', params: { id: 'bitcoin' } }">
    Dashboard
</router-link>
```

## 📝 Variables Tailwind

Le dashboard utilise les variables CSS de shadcn configurées dans `src/assets/main.css` :
- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--primary`, `--secondary`
- `--destructive`, `--muted`, etc.

## 🎉 Résultat

Un dashboard moderne, responsive et professionnel avec :
- ✅ Design sombre élégant
- ✅ Badges colorés pour les variations
- ✅ Cartes avec hover effects
- ✅ Grid responsive
- ✅ Données complètes de l'API CoinGecko
- ✅ Composants réutilisables shadcn-vue

Testez-le maintenant : `http://localhost:5173/dashboard/bitcoin` 🚀

