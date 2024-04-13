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



.mainInfo {
    border: 1px solid white;
    color: white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .1);
    display: flex;
    flex-direction: column;
    width: 80%;

}

.tablefollow {
    border: 1px solid white;
    color: white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .1);
    display: flex;
    flex-direction: column;
    width: 80%;
}

.tablefollowrow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
}

.tablefollowrow:first-child {
    border-bottom: 1px solid white;
}


.tablefollowrow div {
    width: 100%;
    text-align: center;
    padding: 30px 0px;
}

.tablefollowrow div:not(:first-child) {
    border-left: 1px solid white;
}

.tablefollowcase {
    font-weight: 800;
    font-size: 20px;
}

@media (max-width: 500px) {
    .tablefollowcase {
        font-weight: 800;
        font-size: 16px;
    }

    .percent {
        font-size: 12px;
    }

    .tablefollowrow div {
        padding: 20px 0px;
    }

}
</style>

<template>
    <div v-if="CoinTimeTableFollow.market_data" class="tablefollow">
        <div class="tablefollowrow">
            <div class="tablefollowcase">1h</div>
            <div class="tablefollowcase">24h</div>
            <div class="tablefollowcase">7d</div>
            <div class="tablefollowcase">14d</div>
            <div class="tablefollowcase">30d</div>
            <div class="tablefollowcase">1y</div>
        </div>
        <div class="tablefollowrow">

            <div class="percent"
                :class="{ 'pos': CoinTimeTableFollow.market_data.price_change_percentage_1h_in_currency.eur >= 0, 'neg': CoinTimeTableFollow.market_data.price_change_percentage_1h_in_currency.eur < 0 }">
                {{ formattedPrice.formattedPriceChangePercentage1h }}%
            </div>
            <div class="percent"
                :class="{ 'pos': CoinTimeTableFollow.market_data.price_change_percentage_24h_in_currency.eur >= 0, 'neg': CoinTimeTableFollow.market_data.price_change_percentage_24h_in_currency.eur < 0 }">
                {{ formattedPrice.formattedPriceChangePercentage24h }}%
            </div>
            <div class="percent"
                :class="{ 'pos': CoinTimeTableFollow.market_data.price_change_percentage_7d_in_currency.eur >= 0, 'neg': CoinTimeTableFollow.market_data.price_change_percentage_7d_in_currency.eur < 0 }">
                {{ formattedPrice.formattedPriceChangePercentage7d }}%
            </div>
            <div class="percent"
                :class="{ 'pos': CoinTimeTableFollow.market_data.price_change_percentage_14d_in_currency.eur >= 0, 'neg': CoinTimeTableFollow.market_data.price_change_percentage_14d_in_currency.eur < 0 }">
                {{ formattedPrice.formattedPriceChangePercentage14d }}%
            </div>
            <div class="percent"
                :class="{ 'pos': CoinTimeTableFollow.market_data.price_change_percentage_30d_in_currency.eur >= 0, 'neg': CoinTimeTableFollow.market_data.price_change_percentage_30d_in_currency.eur < 0 }">
                {{ formattedPrice.formattedPriceChangePercentage30d }}%
            </div>
            <div class="percent"
                :class="{ 'pos': CoinTimeTableFollow.market_data.price_change_percentage_1y_in_currency.eur >= 0, 'neg': CoinTimeTableFollow.market_data.price_change_percentage_1y_in_currency.eur < 0 }">
                {{ formattedPrice.formattedPriceChangePercentage1y }}%
            </div>

        </div>
    </div>
</template>


<script>
import { getSpecificCoinData } from '@/services/api/SpecificCoinRepository.js';


export default {
    name: 'CoinTimeTableFollow',
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            CoinTimeTableFollow: [],
        };
    },
    methods: {
        async retrieveSpecificCoinData() {
            try {
                const data = await getSpecificCoinData(this.id);
                this.CoinTimeTableFollow = data;

                //console.log(this.CoinTimeTableFollow);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    },
    created() {
        this.retrieveSpecificCoinData();
    },
    computed: {
        formattedPrice() {
            const internationalNumberFormat = new Intl.NumberFormat('fr-FR')
            return {
                formattedPriceChangePercentage1h: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data.price_change_percentage_1h_in_currency.eur.toFixed(2))),
                formattedPriceChangePercentage24h: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data.price_change_percentage_24h_in_currency.eur.toFixed(2))),
                formattedPriceChangePercentage7d: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data.price_change_percentage_7d_in_currency.eur.toFixed(2))),
                formattedPriceChangePercentage14d: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data.price_change_percentage_14d_in_currency.eur.toFixed(2))),
                formattedPriceChangePercentage30d: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data.price_change_percentage_30d_in_currency.eur.toFixed(2))),
                formattedPriceChangePercentage1y: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data.price_change_percentage_1y_in_currency.eur.toFixed(2))),
            };
        },
    },
    watch: {
        id() {
            this.retrieveSpecificCoinData(); // Mettre à jour les données lorsque l'ID change
        },
    },

};
</script>
