export async function getCoinChartData(id) {
    const apiKey = 'CG-GnjZx3gVbsjrJgesfyEWkvr1'; // Replace with your actual API key
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=7&x_cg_demo_api_key=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        // If you want to rethrow the error, you can do it here
        throw error;
    }
}
