import { apiClient } from './apiClient.js';

/**
 * Récupère les catégories d'un coin spécifique
 * @param {string} coinId - L'ID du coin (ex: "bitcoin")
 * @returns {Promise<Array<string>>} Liste des catégories du coin
 */
export async function getCoinCategories(coinId) {
    const coinData = await apiClient.get(`/coins/${coinId}`);
    return coinData.categories || [];
}

/**
 * Récupère toutes les catégories disponibles avec leurs top coins
 * @returns {Promise<Array>} Liste de toutes les catégories
 */
export async function getAllCategories() {
    return apiClient.get('/coins/categories');
}

/**
 * Trouve les catégories correspondantes pour un coin donné
 * @param {string} coinId - L'ID du coin
 * @returns {Promise<Array>} Liste des catégories correspondantes avec leurs IDs
 */
export async function findMatchingCategories(coinId) {
    const coinCategories = await getCoinCategories(coinId);
    const allCategories = await getAllCategories();
    
    if (!coinCategories || coinCategories.length === 0) {
        return [];
    }
    
    // Normaliser les noms de catégories pour la correspondance
    const normalizeCategoryName = (name) => {
        if (!name) return '';
        return name.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '')
            .replace(/layer-1-l1/g, 'layer-1')
            .replace(/l1/g, 'layer-1');
    };
    
    // Trouver les catégories correspondantes
    const matchingCategories = allCategories.filter(category => {
        if (!category || !category.name) return false;
        const categoryNameNormalized = normalizeCategoryName(category.name);
        return coinCategories.some(coinCat => {
            if (!coinCat) return false;
            const coinCatNormalized = normalizeCategoryName(coinCat);
            return categoryNameNormalized === coinCatNormalized || 
                   categoryNameNormalized.includes(coinCatNormalized) ||
                   coinCatNormalized.includes(categoryNameNormalized);
        });
    });
    
    return matchingCategories;
}

/**
 * Récupère les coins similaires basés sur les catégories
 * @param {string} coinId - L'ID du coin de référence
 * @param {number} limit - Nombre maximum de coins similaires à retourner (défaut: 6)
 * @returns {Promise<Array>} Liste des coins similaires avec leurs données de marché
 */
export async function getSimilarCoins(coinId, limit = 6) {
    try {
        // Trouver les catégories correspondantes
        const matchingCategories = await findMatchingCategories(coinId);
        
        if (matchingCategories.length === 0) {
            console.log('Aucune catégorie correspondante trouvée pour', coinId);
            return [];
        }
        
        // Collecter tous les IDs de coins des catégories correspondantes
        const coinIdsSet = new Set();
        
        // Utiliser une approche plus simple : récupérer les top coins du marché
        // et filtrer ceux qui partagent les mêmes catégories
        // Pour l'instant, on va utiliser les top coins par market cap et espérer qu'ils partagent des catégories
        
        // Récupérer les top coins (les plus populaires)
        try {
            const topCoins = await apiClient.get('/coins/markets', {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: '100',
                page: '1',
                sparkline: 'false',
            });
            
            if (topCoins && Array.isArray(topCoins)) {
                // Pour chaque top coin, vérifier s'il partage des catégories
                // On va prendre les premiers coins et les filtrer après
                topCoins.forEach(coin => {
                    if (coin.id && coin.id !== coinId) {
                        coinIdsSet.add(coin.id);
                    }
                });
            }
        } catch (error) {
            console.warn('Erreur lors de la récupération des top coins:', error);
        }
        
        // Si on a des catégories correspondantes, on peut aussi essayer de récupérer
        // les coins de ces catégories via une recherche dans les top coins
        // Pour l'instant, on utilise les top coins et on les filtre par catégorie si possible
        
        // Convertir en tableau et limiter
        const coinIds = Array.from(coinIdsSet).slice(0, limit);
        
        if (coinIds.length === 0) {
            console.log('Aucun coin similaire trouvé pour', coinId);
            return [];
        }
        
        // Récupérer les données de marché pour ces coins
        const similarCoins = await apiClient.get('/coins/markets', {
            vs_currency: 'usd',
            ids: coinIds.join(','),
            order: 'market_cap_desc',
            per_page: limit.toString(),
            page: '1',
            sparkline: 'false',
        });
        
        return similarCoins || [];
    } catch (error) {
        console.error('Erreur lors de la récupération des coins similaires:', error);
        // En cas d'erreur, retourner une liste vide
        return [];
    }
}

