<!-- SearchBar.vue -->

<style scoped>
.filter_container {

    display: flex;
    align-items: center;


}


select {
    background: none;

    color: white;
    padding: 15px 10px 15px 15px;
    font-weight: 600;
    font-size: 15px;

    border: 1px solid white;
    border-radius: 12px;

    -webkit-appearance: none;
    /* Supprime les styles par défaut du navigateur */
    -moz-appearance: none;
    appearance: none;

    background-image: url('../images/select.png');
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: right 10px center;
    /* Position de l'image de la flèche */
}





select {
    width: 80px;
}

.option {
    margin-top: 4px;
    font-family: Inter;
    font-weight: 500;
    background-color: white;
    color: black;
}



@media (max-width: 450px) {
    select {
        margin-left: 0px;
        width: 80px;
    }

}
</style>

<template>
    <div class="filter_container">
        <select v-model="selectedResultCount" @change="updateSelectedResultCount">
            <option class="option" :value="option.value" :selected="selectedResultCount === option.value"
                v-for="option in resultOptions" :key="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'FilterSelector',
    data() {
        return {
            selectedResultCount: '10',
            resultOptions: [
                { label: '10', value: '10' },
                { label: '100', value: '100' },
                { label: '250', value: '250' },
            ],
        };
    },
    methods: {
        updateSelectedResultCount() {
            // Mettre à jour la valeur de selectedResultCount dans le local storage
            localStorage.setItem('selectedResultCount', this.selectedResultCount);
            // Émettre un événement pour informer le parent du changement de nombre de résultats
            this.$emit('ResultCount', this.selectedResultCount);
        },
    },
    created() {
        // Charger la valeur de selectedResultCount depuis le local storage lors de la création du composant
        const storedResultCount = localStorage.getItem('selectedResultCount');
        if (storedResultCount) {
            this.selectedResultCount = storedResultCount;
            this.$emit('ResultCount', this.selectedResultCount);
        }
    },
};
</script>
