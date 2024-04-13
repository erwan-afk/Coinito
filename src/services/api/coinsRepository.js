const apiKey = 'CG-GnjZx3gVbsjrJgesfyEWkvr1'; // Remplacez par votre clé d'API réelle

export async function getCoinsData() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en&precision=2&x_cg_demo_api_key=${apiKey}`;

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
