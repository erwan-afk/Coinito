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



.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

input:focus {
    border: none;
    outline: 2px solid #FFBB00;
    outline-offset: 2px;
}


@media (max-width: 700px) {
    input {
        width: 100%;
    }

}

@media (max-width: 550px) {
    input {
        width: 100%;
    }

}
</style>

<template>
    <div class="search_container">
        <input type="text" v-model="searchQuery" @input="updateSearchQuery" placeholder="Rechercher"
            aria-label="Rechercher une cryptomonnaie" aria-describedby="search-description">
        <span id="search-description" class="sr-only">Recherchez une cryptomonnaie par son nom</span>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchQuery: '',
            debounceTimer: null,
        };
    },
    methods: {
        updateSearchQuery() {
            // Annuler le timer précédent s'il existe
            if (this.debounceTimer) {
                clearTimeout(this.debounceTimer);
            }

            // Sauvegarder immédiatement dans le localStorage
            localStorage.setItem('searchQuery', this.searchQuery);

            // Débouncer l'émission de l'événement
            this.debounceTimer = setTimeout(() => {
                this.$emit('search', this.searchQuery);
            }, 300);
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
    beforeUnmount() {
        // Nettoyer le timer lors du démontage du composant
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }
    },
};
</script>
