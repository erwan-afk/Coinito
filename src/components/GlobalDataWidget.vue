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
  <div class="global_stats">
    <p class="th_table"> Coins : <span>{{ GlobalData.active_cryptocurrencies }}</span></p>

    <p class="th_table" v-if="GlobalData.total_market_cap">
      Market : <span>{{ (GlobalData.total_market_cap.eur / 1e9).toFixed(2) }}B €</span>
    </p>

    <p class="th_table" v-if="GlobalData.total_volume">
      24h Vol : <span>{{ (GlobalData.total_volume.eur / 1e9).toFixed(2) }}B €</span>
    </p>

    <p class="th_table" v-if="resultDominance.largest1 && resultDominance.largest2">
      Dominance : <span>{{ resultDominance.largest1.key }} {{ resultDominance.largest1.value.toFixed(1) }}%
        {{ resultDominance.largest2.key }} {{ resultDominance.largest2.value.toFixed(1) }}%</span>
    </p>
  </div>
</template>


<script>
import { getGlobalData } from '@/services/api/GlobalDataRepository.js';

export default {
  name: 'GlobalDataWidget',

  data() {
    return {
      GlobalData: [],
    };
  },
  methods: {
    async retrieveGlobalData() {
      try {
        const data = await getGlobalData();
        this.GlobalData = data.data;

        // Stocker les données globales dans le local storage
        localStorage.setItem('GlobalData', JSON.stringify(this.GlobalData));

        //console.log(this.GlobalData);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
  created() {
    // Vérifier si les données globales existent dans le local storage
    const storedGlobalData = localStorage.getItem('GlobalData');

    if (storedGlobalData) {
      // Si les données existent, les charger depuis le local storage
      this.GlobalData = JSON.parse(storedGlobalData);
    } else {
      // Sinon, appeler la fonction pour récupérer les données globales
      this.retrieveGlobalData();
    }
  },
  computed: {
    resultDominance() {
      if (this.GlobalData && this.GlobalData.market_cap_percentage) {
        const entries = Object.entries(this.GlobalData.market_cap_percentage);

        // Sort the array based on the values in descending order
        entries.sort((a, b) => b[1] - a[1]);

        // Take the first two entries
        const [first, second] = entries.slice(0, 2);

        // Return an object with the keys and values of the two largest entries
        return {
          largest1: { key: first[0], value: first[1] },
          largest2: { key: second[0], value: second[1] },
        };
      } else {
        return {};
      }
    },
  },
};
</script>

