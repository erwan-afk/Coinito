<style>
.coins-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
}

.asc:before {

  content: ' \25B2';
  color: inherit;
  padding-right: 5px;
}

.desc:before {

  content: ' \25BC' !important;
  color: inherit;
  padding-right: 5px;
}

#tableHeader td:before {
  content: ' \25B2';
  padding-right: 5px;
  color: inherit;
}

#tableHeader td {
  cursor: pointer;
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */
}

#tableHeader td:not(.asc):not(.desc):before {
  color: transparent;
}

#tableHeader td:not(.desc):not(.asc):before {
  color: transparent;
}

#tableHeader td:hover:before {
  content: ' \25B2';
  color: inherit !important;
}
</style>

<template>
  <GlobalDataWidget :coinNb="GlobalData.active_cryptocurrencies"
    :market="(GlobalData.total_market_cap.eur / 1e9).toFixed(2)" :Vol_24h="(GlobalData.total_volume.eur / 1e9).toFixed(2)"
    :Dominance="resultDominance">
  </GlobalDataWidget>
  <input type="text" v-model="searchQuery">
  <table class="coins-table">

    <tr class="coin-row th" id="tableHeader">
      <td class="cell" @click="sortTable('market_cap_rank', $event.target)"> # </td>
      <td class="coinInfos" @click="sortTable('name', $event.target)"> Coin </td>
      <td class="cell" @click="sortTable('current_price', $event.target)"> Current Price </td>
      <td class="cell" @click="sortTable('price_change_percentage_24h', $event.target)"> 24h </td>
      <td class="cell" @click="sortTable('total_volume', $event.target)"> 24h Volume </td>
      <td class="cell" @click="sortTable('market_cap', $event.target)"> MarketCap </td>
    </tr>

    <CoinRow v-for="coin in resultQuery" :name="coin.name" :current_price="coin.current_price" :image="coin.image"
      :symbol="coin.symbol" :market_cap_rank="coin.market_cap_rank"
      :price_change_percentage_24h="coin.price_change_percentage_24h" :total_volume="coin.total_volume"
      :market_cap="coin.market_cap" />

  </table>
</template>

<script>
import CoinRow from './components/CoinRow.vue'
import GlobalDataWidget from './components/GlobalDataWidget.vue'
import { getCoinsData } from '@/services/api/coinsRepository.js';
import { getGlobalData } from '@/services/api/GlobalDataRepository.js';


export default {
  name: 'CoinTable',
  components: {
    CoinRow,
    GlobalDataWidget
  },
  data() {
    return {
      CoinsData: [],
      GlobalData: [],
      searchQuery: null,
      sortKey: '',
      sortOrder: 'asc'
    }
  },
  methods: {
    async retrieveGlobalData() {
      getGlobalData()
        .then((data) => {
          this.GlobalData = data.data;
          console.log(this.GlobalData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async retrieveCoinsData() {
      getCoinsData()
        .then((data) => {
          this.CoinsData = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    sortTable(key, element) {
      const thElements = document.querySelectorAll("#tableHeader > td");;
      thElements.forEach(th => {
        th.classList.remove('asc', 'desc');
      });
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }

      element.classList.add(this.sortOrder);


      this.CoinsData.sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        if (this.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }
  },
  created() {
    this.retrieveCoinsData(); // Appel de la fonction lors du montage du composant
    this.retrieveGlobalData();
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.CoinsData.filter((coin) => {
          return coin.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
        });
      } else {
        return this.CoinsData; // Correction ici
      }
    },
    resultDominance() {
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

    },
  }

}
</script>


