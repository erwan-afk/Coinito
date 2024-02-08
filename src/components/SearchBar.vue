<!-- SearchBar.vue -->

<template>
    <div>
        <input type="text" v-model="searchQuery" @input="updateSearchQuery">
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        updateSearchQuery() {
            this.$emit('search', this.searchQuery);
        },
    },
};
</script>
  