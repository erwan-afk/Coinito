/**
 * Client HTTP centralisé pour les appels API CoinGecko via Netlify Function
 * The API key is handled server-side in the Netlify Function
 */
class ApiClient {
    constructor() {
        // Use Netlify Function as the base URL (API key is handled server-side)
        this.baseURL = '/.netlify/functions/coin-gecko';
    }

    /**
     * Effectue une requête GET vers l'API CoinGecko via Netlify Function
     * @param {string} endpoint - L'endpoint de l'API (sans le baseURL)
     * @param {Object} params - Paramètres de requête à ajouter à l'URL
     * @returns {Promise<any>} Les données de la réponse
     * @throws {Error} Si la requête échoue
     */
    async get(endpoint, params = {}) {
        // Construire l'URL avec les paramètres
        const url = new URL(`${this.baseURL}${endpoint}`, window.location.origin);
        
        // Ajouter les paramètres de requête
        Object.keys(params).forEach(key => {
            url.searchParams.append(key, params[key]);
        });

        try {
            const response = await fetch(url.toString());

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
                throw new Error(`HTTP error! Status: ${response.status} - ${errorData.error || 'Unknown error'}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
}

// Export d'une instance singleton
export const apiClient = new ApiClient();

