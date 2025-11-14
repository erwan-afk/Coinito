<style>
.coins-table {
    display: table;
    width: 100%;
    border-collapse: collapse;
    color: white;
}

.container_table {

    width: 90%;
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(150px) saturate(120%);

    z-index: 1;
}


.filter {
    padding: 50px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
}

.rectange {
    transform: translate(0px, 250px);
    width: 400px;
    height: 80%;
    z-index: 0;
    position: absolute;
}

.orange {
    background-color: #7c3c06;
    margin-right: 40%;
}

.blanc {
    background-color: #d9d9d94d;
    margin-right: -40%;

}

.container_table_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../images/fondtab.png');
}

@media (max-width: 500px) {

    .coins-table tr th:nth-last-child(-n+3),
    .coins-table tr th:nth-child(3),
    .coins-table a td:nth-last-child(-n+3),
    .coinSymbol,
    .coins-table a td:nth-child(3) {
        display: none;
    }

    .filter {
        padding: 15px;
    }

    .coin-row {
        padding: 0px 15px;
    }



}

@media (max-width: 768px) {

    .coins-table tr th:nth-last-child(-n+2),
    .coins-table tr th:nth-child(3),
    .coins-table a td:nth-last-child(-n+2),
    .coinSymbol,
    .coins-table a td:nth-child(3) {
        display: none;
    }

    .filter {
        padding: 15px;
    }
}

@media (max-width: 800px) {

    .rectange {
        width: 50vw;
    }
}

@media (max-width: 1000px) {
    .container_table {
        margin-top: 10vh;
        margin-left: 15px;
        margin-right: 15px;

    }

}

@media (max-width: 1200px) {

    .coins-table tr th:nth-last-child(-n+2),
    .coins-table a td:nth-last-child(-n+2) {
        display: none;
    }

}
</style>

<template>
    <!-- <div ref="rectangle1" class="rectange orange"></div> -->
    <!-- <div ref="rectangle2" class="rectange blanc"></div> -->

    <div class="container_table_wrapper">

        <div class="container_table" id="tableId">
            <div class="filter">
                <Search-bar @search="handleSearch"></Search-bar>

                <filter-selector @ResultCount="handleResultCountChange"></filter-selector>

            </div>

            <LoadingSpinner v-if="isLoading" message="Chargement des cryptomonnaies..." />
            <table v-else class="coins-table" role="table" aria-label="Tableau des cryptomonnaies">

                <TableHeader @sort="handleSort" />

                <CoinRow v-for="coin in resultQuery" :id="coin.id" :name="coin.name" :current_price="coin.current_price"
                    :image="coin.image" :symbol="coin.symbol" :market_cap_rank="coin.market_cap_rank"
                    :price_change_percentage_24h="coin.price_change_percentage_24h" :total_volume="coin.total_volume"
                    :market_cap="coin.market_cap" />

            </table>


        </div>
    </div>
</template>

<script>
import CoinRow from './CoinRow.vue';
import SearchBar from './SearchBar.vue';
import FilterSelector from './FilterSelector.vue';
import TableHeader from './CoinTableHeader.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import { getCoinsData } from '@/services/api/coinsRepository.js';
import { useErrorHandler } from '@/composables/useErrorHandler.js';

export default {
    name: 'CoinTable',
    components: {
        CoinRow,
        SearchBar,
        FilterSelector,
        TableHeader,
        LoadingSpinner,
    },
    data() {
        return {
            CoinsData: [],
            searchQuery: null,
            selectedResultCount: '10',
            sortKey: '',
            sortOrderDirection: 'asc',
            isLoading: false,
        }
    },
    methods: {

        async retrieveCoinsData() {
            this.isLoading = true;
            try {
                const data = await getCoinsData();
                this.CoinsData = data;
            } catch (error) {
                const { handleApiError, showErrorNotification } = useErrorHandler();
                const errorInfo = handleApiError(error, 'CoinTable');
                showErrorNotification(errorInfo.message);
            } finally {
                this.isLoading = false;
            }
        },
        sortTable(key, sortOrderDirection) {
            if (this.sortKey === key) {
                this.sortOrderDirection = sortOrderDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortKey = key;
                this.sortOrderDirection = sortOrderDirection;
            }
        },

        handleSearch(query) {
            this.searchQuery = query;
        },
        handleSort(sortKey, sortOrderDirection) {
            this.sortTable(sortKey, sortOrderDirection);
        },
        handleResultCountChange(selectedResultCountData) {
            this.selectedResultCount = selectedResultCountData;

            if (this.$refs.rectangle1 && this.$refs.rectangle2) {
                this.$refs.rectangle1.style.height = selectedResultCountData * 85 + 'px';
                this.$refs.rectangle2.style.height = selectedResultCountData * 85 + 'px';
            }


        },
    },
    created() {

        this.retrieveCoinsData();

    },
    computed: {
        filteredCoins() {
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                return this.CoinsData.filter((coin) => {
                    return coin.name.toLowerCase().indexOf(query) > -1;
                });
            } else {
                return this.CoinsData.slice(0, parseInt(this.selectedResultCount));
            }
        },
        resultQuery() {
            if (!this.sortKey) {
                return this.filteredCoins;
            }

            // Créer une copie pour éviter de muter les données originales
            const sorted = [...this.filteredCoins];

            sorted.sort((a, b) => {
                let aValue = a[this.sortKey];
                let bValue = b[this.sortKey];

                // Gérer les valeurs nulles/undefined
                if (aValue == null) aValue = '';
                if (bValue == null) bValue = '';

                // Comparaison numérique pour les nombres
                if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return this.sortOrderDirection === 'asc'
                        ? aValue - bValue
                        : bValue - aValue;
                }

                // Comparaison de chaînes
                const aStr = String(aValue).toLowerCase();
                const bStr = String(bValue).toLowerCase();

                if (this.sortOrderDirection === 'asc') {
                    return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
                } else {
                    return aStr < bStr ? 1 : aStr > bStr ? -1 : 0;
                }
            });

            return sorted;
        },
    }

}
</script>
