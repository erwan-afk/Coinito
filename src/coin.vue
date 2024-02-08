<template>
    <div>

        <router-link to="/" tag="button">Accueil</router-link>
        <CoinDetails :id="coinId"></CoinDetails>
        <CoinChart :id="coinId"></CoinChart>
    </div>
</template>
  
<script>

import CoinDetails from './components/CoinDetails.vue'
import CoinChart from './components/CoinChart.vue'

export default {
    name: 'Coin',
    components: {
        CoinDetails,
        CoinChart,
    },
    data() {
        return {
            coinId: null,
        };
    },
    created() {
        this.coinId = this.$route.params.id;
    },
};
</script>
  