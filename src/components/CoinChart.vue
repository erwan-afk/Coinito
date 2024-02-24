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

.chart_container {
    border: 1px solid white;
    color: white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .1);
    width: 80%;


}
</style>

<template>
    <div class="chart_container">
        <canvas id="myChart"></canvas>

    </div>
</template>


<script>
import { getCoinChartData } from '@/services/api/CoinChartRepository.js';
import { getSpecificCoinData } from '@/services/api/SpecificCoinRepository.js';
import { Chart } from 'chart.js/auto';

export default {

    name: 'CoinChart',
    props: {
        id: { type: String, required: true },

    },
    data() {
        return {
            CoinChart: [],
            Value: [],
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
        async retrieveSpecificCoinData() {
            try {
                const data = await getSpecificCoinData(this.id);
                this.Value = data.market_data.price_change_percentage_1h_in_currency.eur;
                console.log(this.Value);
            } catch (error) {
                console.error("Error:", error);
            }
        },
        async generateChart() {

            await this.retrieveSpecificCoinData();
            let color;
            let colorsecond;
            if (this.Value) {
                if (this.Value > 0) {

                    color = 'rgba(0,255,0,';
                    colorsecond = 'rgb(0,255,0)';
                } else {

                    color = 'rgba(255,0,0,';
                    colorsecond = 'rgb(102,0,0)';
                }
            } else {
                color = 'rgba(255,255,255,';
                colorsecond = 'rgb(102,102,102)';
            }


            // // Générez des étiquettes pour l'axe des x (un label centré pour chaque plage de 24 heures)


            // // Calculer la plage horaire totale
            // const totalHours = 7 * 24; // 7 jours par 24 heures

            // // Un seul label centré pour chaque plage de 24 heures
            // const labels = Array.from({ length: totalHours }, (_, index) => {
            //     const currentDate = new Date();
            //     currentDate.setDate(currentDate.getDate() - (7 - index / 24)); // Inverser l'ordre des jours
            //     const dayIndex = currentDate.getDay();
            //     const currentDay = daysOfWeek[dayIndex];
            //     const formattedDate = currentDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
            //     return `${currentDay}\n${formattedDate}`;
            // });

            // // Calculer le nombre de labels à afficher (ajustez selon vos besoins)


            // // Calculer le saut entre les labels
            // const labelSkip = Math.floor(labels.length / numberOfLabelsToDisplay);

            // // Filtrer les labels pour afficher seulement ceux qui sont espacés régulièrement
            // const filteredLabels = labels.map((label, index) => (index % labelSkip === 0 ? label : ''));

            const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
            const numberOfLabelsToDisplay = 7;

            // Initialiser des tableaux pour chaque jour de la semaine
            const dailyData = Array.from({ length: 7 }, () => ({ sum: 0, count: 0 }));

            // Calculer la moyenne des points par jour
            this.CoinChart.prices.forEach((price) => {
                const date = new Date(price[0]);
                const dayIndex = date.getDay();
                console.log(dayIndex)
                const value = price[1];

                // Ajouter la valeur au total du jour
                dailyData[dayIndex].sum += value;
                dailyData[dayIndex].count += 1;
            });

            // Calculer la moyenne pour chaque jour
            const averagedData = dailyData.map((day) => (day.count > 0 ? day.sum / day.count : 0));

            // Générer les labels basés sur les jours de la semaine
            const labels = Array.from({ length: numberOfLabelsToDisplay }, (_, index) => {
                const dayIndex = index % 7;
                const currentDate = new Date();  // Utilisez la date actuelle
                currentDate.setDate(currentDate.getDate() - (6 - dayIndex));  // Ajustez selon le jour de la semaine

                const dayOfWeek = daysOfWeek[dayIndex];
                const formattedDate = currentDate.toLocaleDateString('fr-FR', { day: 'numeric' });

                return `${dayOfWeek} ${formattedDate}`;
            });



            // Créez le graphique
            const ctx = document.getElementById('myChart').getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Prix',
                            data: averagedData,
                            borderColor: color + "1)",
                            borderWidth: 1,
                            fill: true,  // Activer le remplissage sous la courbe
                            backgroundColor: (context) => {
                                const chart = context.chart;
                                if (chart && chart.ctx && chart.chartArea) {
                                    const { ctx, chartArea } = chart;
                                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                                    gradient.addColorStop(0, color + "0"); // Couleur de remplissage avec une opacité de 0.2
                                    gradient.addColorStop(1, color + "1)"); // Couleur de fond avec une opacité de 0
                                    return gradient;
                                }
                                // Gérer le cas où certaines propriétés ne sont pas définies
                                return color + "0.2"; // Fallback à une couleur fixe avec une opacité de 0.2
                            },
                            pointBackgroundColor: colorsecond,  // Couleur de fond des cercles
                            pointRadius: 3,
                        },
                    ],
                },
                options: {

                    layout: {
                        padding: {
                            left: 20,
                            right: 20,
                            top: 60,
                            bottom: 20
                        }
                    },
                    scales: {
                        x: {
                            type: 'category',
                            position: 'bottom',

                            title: {
                                display: false,
                                text: 'Jours de la semaine',
                                color: 'white',


                            },
                            ticks: {
                                color: 'white',
                                maxTicksLimit: numberOfLabelsToDisplay,
                                padding: 40,
                                offset: true,

                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0)', // Couleur de la ligne de la grille
                                borderColor: 'transparent', // Couleur de la bordure de la grille
                                borderWidth: 1, // Largeur de la ligne de la grille
                            },

                        },
                        y: {
                            type: 'linear',
                            position: 'left',
                            title: {
                                display: false,
                                text: 'Prix',
                                color: 'white',

                            },
                            grid: {
                                color: ['rgba(255, 255, 255, 0.2)'],
                                offset: true,
                            },
                            ticks: {
                                color: 'white',
                                padding: 20,
                                callback: function (value, index, values) {
                                    return value >= 1000 ? value / 1000 + 'k' : value;
                                },
                            },
                            border: {
                                dash: [2, 4],
                            },
                        },

                    },
                    plugins: {
                        legend: {
                            display: false
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

