<style>
.global_stats {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  color: white;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 100px;
  z-index: 1;
}

.case {
  display: flex;
  background-color: rgba(255, 255, 255, .1);
  padding: 30px;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 20px;
  margin: 15px;
  backdrop-filter: blur(8px);
}

.row {
  display: flex;
  flex-direction: row;
}


.large {
  flex-grow: 1;
}

.large div {
  display: flex;
  flex-direction: row;

  align-items: center;
}

.line {
  background-color: white;
  width: 100px;
  height: .5px;
  margin: 0px 30px;
}

.info {
  font-size: 24px;
  padding-bottom: 10px;
}

.data {
  font-size: 36px;
  font-weight: 700;
}


.th_table span {
  font-weight: 700;
}

@media (max-width: 1000px) {

  .row {
    flex-direction: column;
  }


}

@media (max-width: 500px) {

  .global_stats {
    width: 100%;
  }

  .info {
    font-size: 16px;
  }

  .data {
    font-size: 24px;
  }

  .large div {
    flex-direction: column;
  }

  .large .line {
    margin: 10px;
  }
}
</style>

<template>
  <div class="global_stats">
    <div class="row">
      <div class="case">
        <span class="info"> Nombre de coins : </span>
        <span class="data">{{ GlobalData.active_cryptocurrencies }}</span>
      </div>

      <div class="case" v-if="GlobalData.total_market_cap">
        <span class="info">Marché total :</span>
        <span class="data">{{ (GlobalData.total_market_cap.eur / 1e9).toFixed(2) }}B €</span>
      </div>

      <div class="case" v-if="GlobalData.total_volume">
        <span class="info">Volume du marché sur 24h :</span>
        <span class="data">{{ (GlobalData.total_volume.eur / 1e9).toFixed(2) }}B €</span>
      </div>

    </div>
    <div class="row">
      <div class="case large" v-if="resultDominance.largest1 && resultDominance.largest2">
        <span class="info">Domination du marché :</span>
        <div>
          <span class="data">{{ resultDominance.largest1.key.toUpperCase() }} {{
          resultDominance.largest1.value.toFixed(1)
        }}%</span>
          <div class="line"></div>
          <span class="data"> {{ resultDominance.largest2.key.toUpperCase() }} {{
          resultDominance.largest2.value.toFixed(1) }}%</span>
        </div>
      </div>

    </div>



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
