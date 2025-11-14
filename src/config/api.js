/**
 * Configuration de l'API CoinGecko
 * La clé API doit être définie dans le fichier .env avec la variable 
 */
export const API_CONFIG = {
    baseURL: 'https://api.coingecko.com/api/v3',
    apiKey: import.meta.env.VITE_COINGECKO_API_KEY || '',
};

/**
 * Vérifie si la clé API est configurée
 * @throws {Error} Si la clé API n'est pas définie
 */
export function validateApiKey() {
    if (!API_CONFIG.apiKey) {
        throw new Error(
            ' n\'est pas définie. ' +
            'Veuillez créer un fichier .env à la racine du projet avec votre clé API.'
        );
    }
}

