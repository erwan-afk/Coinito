import { API_CONFIG, validateApiKey } from '@/config/api.js';

/**
 * Client HTTP centralisé pour les appels API CoinGecko
 */
class ApiClient {
    constructor() {
        this.baseURL = API_CONFIG.baseURL;
    }

    /**
     * Effectue une requête GET vers l'API CoinGecko
     * @param {string} endpoint - L'endpoint de l'API (sans le baseURL)
     * @param {Object} params - Paramètres de requête à ajouter à l'URL
     * @returns {Promise<any>} Les données de la réponse
     * @throws {Error} Si la requête échoue
     */
    async get(endpoint, params = {}) {
        validateApiKey();

        // Construire l'URL avec les paramètres
        const url = new URL(`${this.baseURL}${endpoint}`);
        
        // Ajouter la clé API
        url.searchParams.append('x_cg_demo_api_key', API_CONFIG.apiKey);
        
        // Ajouter les autres paramètres
        Object.keys(params).forEach(key => {
            url.searchParams.append(key, params[key]);
        });

        try {
            const response = await fetch(url.toString());

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
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

