/**
 * Configuration de l'API CoinGecko
 * Note: The API key is now handled server-side via Netlify Functions
 * The key should be set as COINGECKO_API_KEY (not VITE_COINGECKO_API_KEY) in Netlify environment variables
 */
export const API_CONFIG = {
    baseURL: 'https://api.coingecko.com/api/v3',
    // API key is no longer needed client-side - handled by Netlify Function
};

/**
 * Validates API key (no longer required client-side)
 * The API key is now handled server-side in the Netlify Function
 */
export function validateApiKey() {
    // No validation needed client-side - API key is handled server-side
    // This function is kept for backwards compatibility but does nothing
}

