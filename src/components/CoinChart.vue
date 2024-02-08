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
</style>

<template>
    <div>{{ id }}</div>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>


<script>
import { getCoinChartData } from '@/services/api/CoinChartRepository.js';
import { Chart } from 'chart.js/auto';

export default {

    name: 'CoinChart',
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            CoinChart: [],
        };
    },
    methods: {
        async retrieveCoinChartData() {
            try {

                const data = await getCoinChartData(this.id);
                this.CoinChart = data;
                console.log(this.CoinChart);
                this.generateChart();
            } catch (error) {
                console.error("Error:", error);
            }
        },
        generateChart() {
            // Générez des étiquettes pour l'axe des x (un label centré pour chaque plage de 24 heures)
            const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

            // Calculer la plage horaire totale
            const totalHours = 7 * 24; // 7 jours par 24 heures

            // Un seul label centré pour chaque plage de 24 heures
            const labels = Array.from({ length: totalHours }, (_, index) => {
                const currentDate = new Date();
                currentDate.setDate(currentDate.getDate() - (7 - index / 24)); // Inverser l'ordre des jours
                const dayIndex = currentDate.getDay();
                const currentDay = daysOfWeek[dayIndex];
                const formattedDate = currentDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
                return `${currentDay}\n${formattedDate}`;
            });

            // Calculer le nombre de labels à afficher (ajustez selon vos besoins)
            const numberOfLabelsToDisplay = 7;

            // Calculer le saut entre les labels
            const labelSkip = Math.floor(labels.length / numberOfLabelsToDisplay);

            // Filtrer les labels pour afficher seulement ceux qui sont espacés régulièrement
            const filteredLabels = labels.map((label, index) => (index % labelSkip === 0 ? label : ''));

            // Créez le graphique
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: filteredLabels,
                    datasets: [
                        {
                            label: 'Prix',
                            data: this.CoinChart.prices.map(price => price[1]),
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            fill: false,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: 'category',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'Jours de la semaine',
                            },
                            ticks: {
                                maxTicksLimit: numberOfLabelsToDisplay,
                            },
                        },
                        y: {
                            type: 'linear',
                            position: 'left',
                            title: {
                                display: true,
                                text: 'Prix',
                            },
                        },
                    },
                },
            });
        },
    },
    created() {
        this.retrieveCoinChartData();
    },

    computed: {

    },

};


/*

console.log(this.CoinChart)
            // Récupérez les données du tableau prices
            const pricesData = this.CoinChart.prices.map(prices => prices[1]);


            // Générez des étiquettes pour l'axe des x (7 jours à partir de maintenant)
            const labels = Array.from({ length: 7 * 24 }, (_, index) => index);

            // Créez le graphique
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Prix',
                            data: pricesData,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            fill: false,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'Heures',
                            },
                        },
                        y: {
                            type: 'linear',
                            position: 'left',
                            title: {
                                display: true,
                                text: 'Prix',
                            },
                        },
                    },
                },
            });

*/
</script>

