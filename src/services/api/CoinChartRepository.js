export async function getCoinChartData(id) {
    return fetch('https://api.coingecko.com/api/v3/coins/' + id + '/market_chart?vs_currency=eur&days=7')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Error:", error);
            // Si vous souhaitez relancer l'erreur, vous pouvez le faire ici
            throw error;
        });
}
