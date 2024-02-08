<!-- TableHeader.vue -->
<style>
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

#tableHeader th:before {
    content: ' \25B2';
    padding-right: 5px;
    color: inherit;
}

#tableHeader th {
    cursor: pointer;
    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */
}

#tableHeader th:not(.asc):not(.desc):before {
    color: transparent;
}

#tableHeader th:not(.desc):not(.asc):before {
    color: transparent;
}

#tableHeader th:hover:before {
    content: ' \25B2';
    color: inherit !important;
}
</style>

<template>
    <tr class="coin-row th" id="tableHeader">
        <th class="cell" @click="handleSort(key)" v-for="(label, key) in headers" :key="key">
            {{ label }}
            <span v-if="sortKey === key && sortOrder === 'asc'" class="asc">▲</span>
            <span v-else-if="sortKey === key && sortOrder === 'desc'" class="desc">▼</span>
        </th>
    </tr>
</template>
  
<script>
export default {
    data() {
        return {
            headers: {
                market_cap_rank: '#',
                name: 'Coin',
                current_price: 'Current Price',
                price_change_percentage_24h: '24h',
                total_volume: '24h Volume',
                market_cap: 'MarketCap',
            },
            sortKey: '',
            sortOrder: 'asc',
        };
    },
    methods: {
        handleSort(field) {
            if (this.sortKey === field) {
                this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortKey = field;
                this.sortOrder = 'asc';
            }

            this.$emit('sort', this.sortKey, this.sortOrder);
        },
    },
};
</script>
  