<!-- SearchBar.vue -->

<style scoped>
.search_container {
    display: flex;
    align-items: center;

}

.search_container img {
    margin-left: 30px;
}

input {
    background: url("../images/search.png") no-repeat;
    background-size: 30px;
    /* Taille de l'icône */
    /* Taille de l'icône */
    background-position: 20px center;
    /* Position de l'icône */
    padding: 15px 15px 15px 65px;
    /* Ajustez le padding pour laisser de l'espace pour l'icône */
    border-radius: 12px;
    border: 1px solid white;
    color: white;
    font-weight: 600;
    font-size: 20px;

}

input::placeholder {}


input:focus {

    border: none;
}


@media (max-width: 700px) {
    input {
        width: 30vw;
    }

}

@media (max-width: 550px) {
    input {
        width: 60px;
    }

}
</style>

<template>
    <div class="search_container">
        <input type="text" v-model="searchQuery" @input="updateSearchQuery" placeholder="Rechercher">
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        updateSearchQuery() {
            // Mettre à jour la valeur de searchQuery dans le local storage
            localStorage.setItem('searchQuery', this.searchQuery);
            // Émettre un événement pour informer le parent du changement de recherche
            this.$emit('search', this.searchQuery);
        },
    },
    created() {
        // Charger la valeur de searchQuery depuis le local storage lors de la création du composant
        const storedSearchQuery = localStorage.getItem('searchQuery');
        if (storedSearchQuery) {
            this.searchQuery = storedSearchQuery;
            this.$emit('search', this.searchQuery);
        }
    },
};
</script>
