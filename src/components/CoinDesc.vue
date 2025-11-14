<style>
.global_stats {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;

}

.th_table {
    font-size: 15px;
}

.th_table span {
    font-weight: 700;
}

.description_coin {
    display: flex;
    justify-content: center;
    color: white;
    width: 100%;

}


@media (max-width: 500px) {
    .text {
        width: 80%;
    }
}
</style>

<template>
    <div class="description_coin">
        {{ text }}


    </div>
</template>


<script>
import { getSpecificCoinData } from '@/services/api/SpecificCoinRepository.js';
import { useErrorHandler } from '@/composables/useErrorHandler.js';

export default {
    name: 'CoinDesc',
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            CoinDesc: [],
        };
    },
    methods: {
        async retrieveSpecificCoinData() {
            try {
                const data = await getSpecificCoinData(this.id);
                this.CoinDesc = data;
            } catch (error) {
                const { handleApiError } = useErrorHandler();
                handleApiError(error, 'CoinDesc');
            }
        }
    },
    created() {
        this.retrieveSpecificCoinData();
    },
    watch: {
        id() {
            this.retrieveSpecificCoinData(); // Mettre à jour les données lorsque l'ID change
        },
    },
    computed: {
        text() {
            // Vérifier si CoinDetails.description.en existe pour éviter les erreurs
            if (this.CoinDesc.description && this.CoinDesc.description.en) {
                // Supprimer toutes les balises HTML de la chaîne de texte
                const textWithoutHTML = this.CoinDesc.description.en.replace(/<[^>]+>/g, '');

                // Diviser le texte en fonction des points-virgules
                const textArray = textWithoutHTML.split(';');

                // Concaténer les parties avec des doubles sauts de ligne
                const formattedText = textArray.join('\n\n');

                return formattedText;
            }

            // Retourner une chaîne vide si CoinDetails.description.en n'est pas défini
            return '';
        }
    },
};
</script>
