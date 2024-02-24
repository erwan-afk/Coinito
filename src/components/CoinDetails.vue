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

.coin {
    color: white;
}


.mainInfo {
    border: 1px solid white;
    color: white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .1);
    display: flex;
    flex-direction: column;

    width: 80%;
    gap: 10px;
}

.mainInfo img {
    width: 30px;
    height: 30px;
    border-radius: 10px;
}

.rowdetail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 30px;
}

.title_coin {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.title_coin div:nth-child(2) {
    padding: 0px 10px;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
}

.title_coin div:nth-child(3) {
    font-weight: 400;
    font-size: 20px;
}

.rank_coin {
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
    font-size: 14px;
    font-weight: 800;
    padding: 0px 16px;
    border-radius: 6px;
    height: 32px;
}





.price_coin {
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
}

.daily_raise {
    display: flex;
    font-weight: 400;
    font-size: 20px;
    align-items: center;
}

.daily_raise div {
    padding-right: 20px;

}

.bar {
    background-color: rgba(0, 0, 0, .25);
    width: 100%;
    height: 6px;
    margin-bottom: 10px;
    border-radius: 10px;

}

.bar-gradient {
    background: rgb(255, 0, 0);
    background: linear-gradient(90deg, rgba(255, 187, 0, 1) 0%, rgba(255, 0, 0, 1) 100%);
    width: 80%;
    height: 6px;
    border-radius: 10px;
}

.infobar {
    font-size: 16px;
    font-weight: 600;
}

.detailsinfo {
    border: 1px solid white;
    color: white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .1);
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;
}

.detailtab {
    padding: 16px 30px;

}

.detailtab:not(:last-child) {

    border-bottom: 1px solid rgba(255, 255, 255, .4);
}


.top {
    padding-top: 30px;
}

.bot {
    padding-bottom: 30px;
}

@media (min-width: 1055px) {

    .detailtab {
        flex: 1;
        align-items: center;

    }

}
</style>

<template>
    <div class="mainInfo" v-if="CoinDetails.image">

        <div class="rowdetail top">
            <div class="title_coin">
                <img :src="CoinDetails.image.large">
                <div>{{ CoinDetails.name }}</div>
                <div>{{ CoinDetails.symbol.toUpperCase() }} Price</div>
            </div>

            <div class="rank_coin">#{{ CoinDetails.market_data.market_cap_rank }}</div>
        </div>


        <div v-if="CoinDetails.market_data" class="rowdetail price">
            <div class="price_coin">{{ CoinDetails.market_data.current_price.eur }} €</div>

            <div class="daily_raise">
                <div class="percent" :class="{ 'pos': isPositiveChange, 'neg': !isPositiveChange }">
                    {{ formattedPrice.formattedPriceChangePercentage24h }}%
                </div>


                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="28" height="28" rx="14" stroke="white" stroke-width="2" />
                    <path
                        d="M13.4828 22V11.0909H16.5083V22H13.4828ZM15.0027 9.68466C14.5529 9.68466 14.167 9.53551 13.845 9.23722C13.5278 8.93419 13.3691 8.57197 13.3691 8.15057C13.3691 7.7339 13.5278 7.37642 13.845 7.07812C14.167 6.77509 14.5529 6.62358 15.0027 6.62358C15.4525 6.62358 15.836 6.77509 16.1532 7.07812C16.4752 7.37642 16.6362 7.7339 16.6362 8.15057C16.6362 8.57197 16.4752 8.93419 16.1532 9.23722C15.836 9.53551 15.4525 9.68466 15.0027 9.68466Z"
                        fill="white" />
                </svg>

            </div>
        </div>

        <div class="rowdetail">
            <div class="bar">
                <div class="bar-gradient"></div>
            </div>
        </div>




        <div class="rowdetail infobar bot">
            <div>{{ CoinDetails.market_data.low_24h.eur }} €</div>
            <div>24h Range</div>
            <div>{{ CoinDetails.market_data.high_24h.eur }} €</div>
        </div>
    </div>




    <div class="detailsinfo" v-if="CoinDetails.market_data">
        <div class="rowdetail detailtab">
            <div>Capitalisation boursière</div>
            <div>{{ CoinDetails.market_data.market_cap.eur }}</div>
        </div>
        <div class="rowdetail detailtab">
            <div>Valorisation (FDV)</div>
            <div>{{ CoinDetails.market_data.fully_diluted_valuation.eur }}</div>
        </div>
        <div class="rowdetail detailtab">
            <div>Offre en circulation</div>
            <div>{{ CoinDetails.market_data.circulating_supply }}</div>
        </div>
        <div class="rowdetail detailtab">
            <div>Offre totale</div>
            <div>{{ CoinDetails.market_data.total_supply }}</div>
        </div>
        <div class="rowdetail detailtab">
            <div>Offre maximal</div>
            <div>{{ CoinDetails.market_data.max_supply }}</div>
        </div>

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
    watch: {
        'CoinDetails.market_data.price_change_percentage_1h_in_currency.eur': function (newValue) {
            // Émettre un événement avec la tendance de la variation de prix dès que la valeur est mise à jour
            const isPositiveChange = newValue >= 0;
            this.$emit('price-change', isPositiveChange);
        }
    },
    methods: {
        async retrieveSpecificCoinData() {
            try {
                const data = await getSpecificCoinData(this.id);
                this.CoinDetails = data;

                // Stocker les données spécifiques de la pièce dans le local storage
                //localStorage.setItem('SpecificCoinData' + this.id, JSON.stringify(data));

                //console.log(this.CoinDetails);
            } catch (error) {
                console.error("Error:", error);
            }
        },

    },
    created() {
        this.retrieveSpecificCoinData();
        // Vérifier si les données spécifiques de la pièce existent dans le local storage
        /*
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
        */
    },
    computed: {
        isPositiveChange() {
            return this.CoinDetails.market_data.price_change_percentage_1h_in_currency.eur >= 0;
        },
        formattedPrice() {
            const internationalNumberFormat = new Intl.NumberFormat('fr-FR')
            return {
                formattedPriceChangePercentage24h: internationalNumberFormat.format(Math.abs(this.CoinDetails.market_data.price_change_percentage_1h_in_currency.eur.toFixed(2)))
            };
        },

    }

};
</script>

