<style>
.coins-table {
    display: table;
    width: 100%;
    border-collapse: collapse;
    color: white;
}

.container_table {
    margin-top: 15vh;
    width: 90%;
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(150px);
    z-index: 1;
}


.filter {
    padding: 50px;
    display: flex;
    justify-content: space-between;
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

@media (max-width: 500px) {

    .coins-table tr th:nth-last-child(-n+3),
    .coins-table tr th:nth-child(3),
    .coins-table a td:nth-last-child(-n+3),
    .coinSymbol,
    .coins-table a td:nth-child(3) {
        display: none;
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
    <div id="rect" class="rectange orange"></div>
    <div id="rect2" class="rectange blanc"></div>

    <div class="container_table" id="tableId">
        <div class="filter">
            <Search-bar @search="handleSearch"></Search-bar>

            <filter-selector @ResultCount="handleResultCountChange"></filter-selector>

        </div>

        <table class="coins-table">

            <TableHeader @sort="handleSort" />

            <CoinRow v-for="coin in resultQuery" :id="coin.id" :name="coin.name" :current_price="coin.current_price"
                :image="coin.image" :symbol="coin.symbol" :market_cap_rank="coin.market_cap_rank"
                :price_change_percentage_24h="coin.price_change_percentage_24h" :total_volume="coin.total_volume"
                :market_cap="coin.market_cap" />

        </table>


    </div>
</template>

<script>
import CoinRow from './CoinRow.vue';
import SearchBar from './SearchBar.vue';
import FilterSelector from './FilterSelector.vue';
import TableHeader from './CoinTableHeader.vue';
import { getCoinsData } from '@/services/api/coinsRepository.js';

export default {
    name: 'CoinTable',
    components: {
        CoinRow,
        SearchBar,
        FilterSelector,
        TableHeader,
    },
    data() {
        return {
            CoinsData: [],
            searchQuery: null,
            selectedResultCount: '10',
            sortKey: '',
            sortOrderDirection: 'asc'
        }
    },
    methods: {

        async retrieveCoinsData() {
            try {
                const data = await getCoinsData();
                this.CoinsData = data;

            } catch (error) {
                console.error("Error:", error);
            }
        },
        sortTable(key, sortOrderDirection) {
            const thElements = document.querySelectorAll("#tableHeader > th");

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

        },
        handleResultCountChange(selectedResultCountData) {
            console.log(selectedResultCountData)
            this.selectedResultCount = selectedResultCountData; // Mettez à jour la propriété dans le parent
            const rectangle1 = document.getElementById('rect');
            const rectangle2 = document.getElementById('rect2');

            if (rect && rect2) {
                rectangle1.style.height = selectedResultCountData * 85 + 'px';
                rectangle2.style.height = selectedResultCountData * 85 + 'px';
            }


        },
    },
    created() {

        this.retrieveCoinsData();

    },
    computed: {
        resultQuery() {
            if (this.searchQuery) {
                return this.CoinsData.filter((coin) => {
                    return coin.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
                });
            } else {
                return this.CoinsData.slice(0, this.selectedResultCount);
            }


        },

    }

}
</script>
