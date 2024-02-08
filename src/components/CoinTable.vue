<style>
.coins-table {
    display: table;
    width: 100%;
    border-collapse: collapse;
}
</style>
<template>
    <search-bar @search="handleSearch"></search-bar>
    <table class="coins-table">

        <TableHeader @sort="handleSort" />

        <CoinRow v-for="coin in resultQuery" :id="coin.id" :name="coin.name" :current_price="coin.current_price"
            :image="coin.image" :symbol="coin.symbol" :market_cap_rank="coin.market_cap_rank"
            :price_change_percentage_24h="coin.price_change_percentage_24h" :total_volume="coin.total_volume"
            :market_cap="coin.market_cap" />

    </table>
</template>

<script>
import CoinRow from './CoinRow.vue';
import SearchBar from './SearchBar.vue';
import TableHeader from './CoinTableHeader.vue';
import { getCoinsData } from '@/services/api/coinsRepository.js';

export default {
    name: 'CoinTable',
    components: {
        CoinRow,
        SearchBar,
        TableHeader
    },
    data() {
        return {
            CoinsData: [],
            searchQuery: null,
            sortKey: '',
            sortOrderDirection: 'asc'
        }
    },
    methods: {

        async retrieveCoinsData() {
            try {
                const data = await getCoinsData();
                this.CoinsData = data;

                // Stocker les données dans le local storage
                localStorage.setItem('CoinsData', JSON.stringify(data));
            } catch (error) {
                console.error("Error:", error);
            }
        },
        sortTable(key, sortOrderDirection) {
            const thElements = document.querySelectorAll("#tableHeader > td");

            // ... (reste du code inchangé)

            thElements.forEach(th => {
                th.classList.remove('asc', 'desc');
            });

            if (this.sortKey === key) {
                this.sortOrderDirection = sortOrderDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortKey = key;
                this.sortOrderDirection = sortOrderDirection;
            }

            thElements.forEach(th => {
                if (th.dataset.field === key) {
                    th.classList.add(this.sortOrderDirection);
                }
            });

            this.CoinsData.sort((a, b) => {
                const aValue = a[key];
                const bValue = b[key];

                if (this.sortOrderDirection === 'asc') {
                    return aValue > bValue ? 1 : -1;
                } else {
                    return aValue < bValue ? 1 : -1;
                }
            });
        },

        handleSearch(query) {
            this.searchQuery = query;
        },
        handleSort(sortKey, sortOrderDirection) {
            this.sortKey = sortKey;
            this.sortOrderDirection = sortOrderDirection;
            this.sortTable(sortKey, sortOrderDirection); // Ajoutez sortOrderDirection comme argument
            console.log("SortKey" + sortKey + " Sortorder" + sortOrderDirection)
        },
    },
    created() {
        // Vérifier si les données existent dans le local storage
        const storedData = localStorage.getItem('CoinsData');

        if (storedData) {
            // Si les données existent, les charger depuis le local storage
            this.CoinsData = JSON.parse(storedData);
        } else {
            // Sinon, appeler la fonction pour récupérer les données
            this.retrieveCoinsData();
        }
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
    }

}
</script>
