<!-- TableHeader.vue -->
<style scoped>
.asc::before {

    content: ' \25B2';
    color: inherit;
    padding-right: 5px;
}

.desc:before {

    content: ' \25BC' !important;
    color: inherit;
    padding-right: 5px;
    transition: all 0.3s ease;
}

#tableHeader th:before {
    content: ' \25B2';
    padding-right: 5px;
    min-width: 25px;
    color: inherit;
    transition: all 0.3s ease;

}

#tableHeader th {
    cursor: pointer;
    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */
    padding: 20px 0px;

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

th.cell {
    padding-right: 0px;
}

#tableHeader {
    border-top: none;
}
</style>

<template>
    <tr class="coin-row th" id="tableHeader">
        <th @click="handleSort(key)" v-for="(label, key) in headers" :key="key"
            :class="{ 'coinInfos': key === 'name', 'cell': key !== 'name', 'asc': sortKey === key && sortOrder === 'asc', 'desc': sortKey === key && sortOrder === 'desc' }">
            {{ label }}
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
                current_price: 'Prix actuel',
                price_change_percentage_24h: '24h',
                total_volume: 'Volume en 24h',
                market_cap: 'Capitalisation boursière',
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