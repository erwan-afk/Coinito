const apiKey = 'CG-GnjZx3gVbsjrJgesfyEWkvr1'; // Remplacez par votre clé d'API réelle

export async function getGlobalData() {
    const url = `https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        // Si vous souhaitez relancer l'erreur, vous pouvez le faire ici
        throw error;
    }
}
