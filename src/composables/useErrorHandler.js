/**
 * Composable pour la gestion centralisée des erreurs
 */
export function useErrorHandler() {
    /**
     * Gère les erreurs d'API de manière centralisée
     * @param {Error} error - L'erreur à gérer
     * @param {string} context - Le contexte où l'erreur s'est produite (optionnel)
     * @returns {Object} Un objet avec le message d'erreur formaté
     */
    function handleApiError(error, context = '') {
        let errorMessage = 'Une erreur est survenue';

        if (error.message.includes('HTTP error')) {
            const statusMatch = error.message.match(/Status: (\d+)/);
            if (statusMatch) {
                const status = statusMatch[1];
                switch (status) {
                    case '401':
                        errorMessage = 'Clé API invalide ou manquante';
                        break;
                    case '403':
                        errorMessage = 'Accès refusé à l\'API';
                        break;
                    case '404':
                        errorMessage = 'Ressource non trouvée';
                        break;
                    case '429':
                        errorMessage = 'Trop de requêtes. Veuillez patienter.';
                        break;
                    case '500':
                    case '502':
                    case '503':
                        errorMessage = 'Erreur serveur. Veuillez réessayer plus tard.';
                        break;
                    default:
                        errorMessage = `Erreur HTTP ${status}`;
                }
            }
        } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMessage = 'Erreur de connexion. Vérifiez votre connexion internet.';
        } else {
            errorMessage = error.message || errorMessage;
        }

        // Log l'erreur en développement
        if (import.meta.env.DEV) {
            console.error(`[Error Handler${context ? ` - ${context}` : ''}]:`, error);
        }

        return {
            message: errorMessage,
            originalError: error,
        };
    }

    /**
     * Affiche une notification d'erreur à l'utilisateur
     * @param {string} message - Le message d'erreur à afficher
     */
    function showErrorNotification(message) {
        // Pour l'instant, on utilise console.error
        // Dans une vraie application, on pourrait utiliser un système de notifications
        console.error('[Error Notification]:', message);

        // TODO: Intégrer un système de notifications (toast, snackbar, etc.)
    }

    return {
        handleApiError,
        showErrorNotification,
    };
}

