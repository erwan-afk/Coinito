<style>
.global_stats {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
}

.th_table {
    font-size: 15px;
}

.th_table span {
    font-weight: 700;
}
</style>

<template>
    <div>
        <div v-if="CoinDetails.image">
            <img :src="CoinDetails.image.large">
            <div>{{ CoinDetails.name }}</div>
            <div>{{ CoinDetails.symbol }} Price</div>
            <div>#{{ CoinDetails.market_data.market_cap_rank }}</div>
        </div>
        <div v-if="CoinDetails.market_data">
            <div>
                <div>{{ CoinDetails.market_data.current_price.eur }}</div>
                <div>{{ CoinDetails.market_data.market_cap_change_percentage_24h }}</div>
            </div>
            <div>
                <div>Bar-gradient</div>
                <div>
                    <div>{{ CoinDetails.market_data.low_24h.eur }}</div>
                    <div>24h Range</div>
                    <div>{{ CoinDetails.market_data.high_24h.eur }}</div>
                </div>
            </div>

            <div>
                <div>
                    <div>Market Cap</div>
                    <div>{{ CoinDetails.market_data.market_cap.eur }}</div>
                </div>
                <div>
                    <div>Fully Diluted Valuation</div>
                    <div>{{ CoinDetails.market_data.fully_diluted_valuation.eur }}</div>
                </div>
                <div>
                    <div>Circulating Supply</div>
                    <div>{{ CoinDetails.market_data.circulating_supply }}</div>
                </div>
                <div>
                    <div>Total Supply</div>
                    <div>{{ CoinDetails.market_data.total_supply }}</div>
                </div>
                <div>
                    <div>Max Supply</div>
                    <div>{{ CoinDetails.market_data.max_supply }}</div>
                </div>
            </div>
        </div>

        <table v-if="CoinDetails.market_data">
            <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1y</th>
            </tr>
            <tr>
                <td>{{ CoinDetails.market_data.price_change_percentage_1h_in_currency.eur }}</td>
                <td>{{ CoinDetails.market_data.price_change_percentage_24h_in_currency.eur }}</td>
                <td>{{ CoinDetails.market_data.price_change_percentage_7d_in_currency.eur }}</td>
                <td>{{ CoinDetails.market_data.price_change_percentage_14d_in_currency.eur }}</td>
                <td>{{ CoinDetails.market_data.price_change_percentage_30d_in_currency.eur }}</td>
                <td>{{ CoinDetails.market_data.price_change_percentage_1y_in_currency.eur }}</td>
            </tr>
        </table>

        <div>{{ text }}</div>

    </div>
</template>


<script>
import { getSpecificCoinData } from '@/services/api/SpecificCoinRepository.js';

export default {
    name: 'CoinDetails',
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            CoinDetails: [],
        };
    },
    methods: {
        async retrieveSpecificCoinData() {
            try {
                const data = await getSpecificCoinData(this.id);
                this.CoinDetails = data;

                // Stocker les données spécifiques de la pièce dans le local storage
                localStorage.setItem('SpecificCoinData' + this.id, JSON.stringify(data));

                console.log(this.CoinDetails);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    },
    created() {
        // Vérifier si les données spécifiques de la pièce existent dans le local storage
        const storedSpecificCoinData = localStorage.getItem('SpecificCoinData' + this.id);

        if (storedSpecificCoinData) {
            try {
                // Si les données existent, tenter de les charger depuis le local storage
                this.CoinDetails = JSON.parse(storedSpecificCoinData);
            } catch (error) {
                console.error("Error parsing stored data:", error);
                // En cas d'erreur de parsing, supprimer les données incorrectes du local storage
                localStorage.removeItem('SpecificCoinData' + this.id);
                // Appeler la fonction pour récupérer les données spécifiques de la pièce
                this.retrieveSpecificCoinData();
            }
        } else {
            // Si les données n'existent pas, appeler la fonction pour récupérer les données spécifiques de la pièce
            this.retrieveSpecificCoinData();
        }
    },

    computed: {
        text() {
            // Vérifier si CoinDetails.description.en existe pour éviter les erreurs
            if (this.CoinDetails.description && this.CoinDetails.description.en) {
                // Supprimer toutes les balises HTML de la chaîne de texte
                const textWithoutHTML = this.CoinDetails.description.en.replace(/<[^>]+>/g, '');

                // Diviser le texte en fonction des points-virgules
                const textArray = textWithoutHTML.split(';');

                // Concaténer les parties avec des doubles sauts de ligne
                const formattedText = textArray.join('\n\n');

                return formattedText;
            }

            // Retourner une chaîne vide si CoinDetails.description.en n'est pas défini
            return '';
        }
    },
};
</script>

