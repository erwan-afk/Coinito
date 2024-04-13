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

    <!-- <line-chart :data="chartData" :options="chartOptions"></line-chart> -->
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

                this.retrieveSpecificCoinData();
                this.generateChart();
            } catch (error) {
                console.error("Error:", error);
            }
        },
        async retrieveSpecificCoinData() {
            try {
                const data = await getSpecificCoinData(this.id);
                this.Value = data.market_data.price_change_percentage_1h_in_currency.eur;
                //console.log(this.Value);
            } catch (error) {
                console.error("Error:", error);
            }
        },
        generateChart() {
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

            const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
            const numberOfLabelsToDisplay = 7;

            const dailyData = Array.from({ length: 7 }, () => ({ sum: 0, count: 0 }));

            this.CoinChart.prices.forEach((price) => {
                const date = new Date(price[0]);
                const dayIndex = date.getDay();
                const value = price[1];

                dailyData[dayIndex].sum += value;
                dailyData[dayIndex].count += 1;
            });

            const averagedData = dailyData.map((day) => (day.count > 0 ? day.sum / day.count : 0));

            const labels = Array.from({ length: numberOfLabelsToDisplay }, (_, index) => {
                const dayIndex = index % 7;
                const currentDate = new Date();
                currentDate.setDate(currentDate.getDate() - (6 - dayIndex));

                const dayOfWeek = daysOfWeek[dayIndex];
                const formattedDate = currentDate.toLocaleDateString('fr-FR', { day: 'numeric' });

                return `${dayOfWeek} ${formattedDate}`;
            });

            const ctx = document.getElementById('myChart');
            if (!ctx) return; // Vérifiez si l'élément canvas existe

            const context = ctx.getContext('2d');
            if (!context) return; // Vérifiez si le contexte de rendu existe

            // Détruisez le graphique existant s'il y en a un
            if (this.CoinChart.graph) {
                this.CoinChart.graph.destroy();
            }

            // Créez le graphique avec le nouvel élément canvas
            this.CoinChart.graph = new Chart(context, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Prix',
                            data: averagedData,
                            borderColor: color + "1)",
                            borderWidth: 1,
                            fill: true,
                            backgroundColor: (context) => {
                                const chart = context.chart;
                                if (chart && chart.ctx && chart.chartArea) {
                                    const { ctx, chartArea } = chart;
                                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                                    gradient.addColorStop(0, color + "0");
                                    gradient.addColorStop(1, color + "1)");
                                    return gradient;
                                }
                                return color + "0.2";
                            },
                            pointBackgroundColor: colorsecond,
                            pointRadius: 3,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: {
                            left: 20,
                            right: 20,
                            top: window.innerWidth > 800 ? 60 : 0,
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
                                color: 'rgba(255, 255, 255, 0)',
                                borderColor: 'transparent',
                                borderWidth: 1,
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

    watch: {
        id() {
            if (this.CoinChart.graph != null) {
                this.CoinChart.graph.destroy();
            }
            this.retrieveCoinChartData();

        },
    },

};
</script>