export async function getSpecificCoinData(id) {
    return fetch('https://api.coingecko.com/api/v3/coins/' + id)
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



