<!-- SearchBar.vue -->

<style scoped>
.search_container {
    padding: 15px;
    border: 1px solid white;
    border-radius: 12px;
    width: 30%;
    display: flex;
    align-items: center;

}

.search_container img {
    margin-left: 30px;
}

input {
    background: none;
    border: none;
    color: white;
    margin-left: 15px;
    font-weight: 600;
    font-size: 20px;
}

input:placeholder {}

input:focus {

    border: none;
}
</style>

<template>
    <div class="search_container">
        <img src="../images/search.png" alt="">
        <input type="text" v-model="searchQuery" @input="updateSearchQuery" placeholder="Rechercher">
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
  