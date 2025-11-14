/**
 * Client HTTP centralisé pour les appels API CoinGecko via Netlify Function
 * The API key is handled server-side in the Netlify Function
 * En développement local, appelle directement l'API CoinGecko
 */
class ApiClient {
    constructor() {
        // En mode développement, utiliser l'API CoinGecko directement
        // En production, utiliser la fonction Netlify
        const isDev = import.meta.env.DEV;
        const useDirectApi = isDev && import.meta.env.VITE_USE_DIRECT_API !== 'false';
        
        if (useDirectApi) {
            // Mode développement : appel direct à l'API CoinGecko
            this.baseURL = 'https://api.coingecko.com/api/v3';
            this.apiKey = import.meta.env.VITE_COINGECKO_API_KEY || '';
        } else {
            // Mode production : utiliser la fonction Netlify
            this.baseURL = '/.netlify/functions/coin-gecko';
            this.apiKey = '';
        }
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
        
        // Ajouter la clé API si disponible (mode développement direct)
        if (this.apiKey) {
            url.searchParams.append('x_cg_demo_api_key', this.apiKey);
        }

        try {
            const response = await fetch(url.toString());

            // Check content type before parsing
            const contentType = response.headers.get('content-type') || '';
            const isJson = contentType.includes('application/json');

            if (!response.ok) {
                // Read the response body as text first (can only be read once)
                // Then try to parse as JSON if content type suggests it
                let errorMessage = 'Unknown error';
                try {
                    const responseText = await response.text();
                    
                    if (isJson) {
                        // Try to parse as JSON
                        try {
                            const errorData = JSON.parse(responseText);
                            errorMessage = errorData.error || errorData.message || JSON.stringify(errorData);
                        } catch (jsonError) {
                            // Not valid JSON despite content-type, use text
                            errorMessage = responseText.substring(0, 200);
                        }
                    } else {
                        // Response is HTML or plain text (e.g., 404 page)
                        errorMessage = responseText.substring(0, 200); // Limit length
                    }
                } catch (readError) {
                    errorMessage = `Failed to read error response: ${readError.message}`;
                }
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            // Only parse as JSON if content type indicates JSON
            if (!isJson) {
                const text = await response.text();
                // Check if we got HTML (likely means Netlify function isn't available)
                if (contentType.includes('text/html') && text.includes('<!DOCTYPE')) {
                    const isDev = import.meta.env.DEV;
                    if (isDev && this.baseURL.includes('netlify')) {
                        throw new Error(
                            `Fonction Netlify non disponible. Le serveur a retourné du HTML au lieu de JSON. ` +
                            `En développement local, l'API appelle directement CoinGecko. ` +
                            `Si vous souhaitez utiliser les fonctions Netlify, exécutez 'npm run dev:netlify' ou 'netlify dev'. ` +
                            `Sinon, assurez-vous que VITE_USE_DIRECT_API n'est pas défini à 'false' dans votre fichier .env`
                        );
                    }
                }
                throw new Error(`Expected JSON response but received ${contentType}. Response: ${text.substring(0, 200)}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            // Re-throw with more context if it's a JSON parsing error
            if (error instanceof SyntaxError && error.message.includes('JSON')) {
                throw new Error(`Failed to parse JSON response. The server may have returned HTML instead of JSON. Original error: ${error.message}`);
            }
            throw error;
        }
    }
}

// Export d'une instance singleton
export const apiClient = new ApiClient();

