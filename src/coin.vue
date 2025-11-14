<style>
.coin-page {

    color: white;
    min-height: 100vh;
}

.coin-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 40px;
}

/* Main Layout - Desktop Ultra Large (2560px+) */
.coin-main-layout {
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 40px;
    margin-bottom: 50px;
    max-width: 1800px;
    margin-left: auto;
    margin-right: auto;
}

/* Desktop Large (1920px - 2559px) */
@media (max-width: 2559px) {
    .coin-main-layout {
        grid-template-columns: 400px 1fr;
        gap: 35px;
        margin-bottom: 45px;
    }

    .coin-container {
        padding: 25px 35px;
        max-width: 1600px;
    }
}

/* Desktop Standard (1440px - 1919px) */
@media (max-width: 1919px) {
    .coin-main-layout {
        grid-template-columns: 380px 1fr;
        gap: 30px;
        margin-bottom: 40px;
    }

    .coin-container {
        padding: 20px 30px;
        max-width: 1400px;
    }
}

/* Desktop Compact (1366px - 1439px) */
@media (max-width: 1439px) {
    .coin-main-layout {
        grid-template-columns: 350px 1fr;
        gap: 25px;
        margin-bottom: 35px;
    }

    .coin-container {
        padding: 20px 25px;
        max-width: 1200px;
    }
}

/* Laptop Large (1280px - 1365px) */
@media (max-width: 1365px) {
    .coin-main-layout {
        grid-template-columns: 320px 1fr;
        gap: 20px;
        margin-bottom: 30px;
    }

    .coin-container {
        padding: 20px 20px;
        max-width: 1100px;
    }
}

/* Laptop Standard (1024px - 1279px) - Transition vers mobile */
@media (max-width: 1279px) {
    .coin-main-layout {
        grid-template-columns: 1fr;
        gap: 25px;
        margin-bottom: 30px;
    }

    .coin-container {
        padding: 20px 25px;
        max-width: 1000px;
    }
}

/* Tablet Layout - Entre laptop et mobile */
@media (max-width: 1024px) {
    .coin-main-layout {
        gap: 20px;
        margin-bottom: 25px;
    }

    .coin-container {
        padding: 15px 20px;
        max-width: 900px;
    }
}

/* Small Mobile - Téléphones */
@media (max-width: 768px) {
    .coin-main-layout {
        gap: 15px;
        margin-bottom: 20px;
    }

    .coin-container {
        padding: 15px 20px;
        max-width: 100%;
    }
}

/* Extra Small Mobile */
@media (max-width: 480px) {
    .coin-container {
        padding: 10px 15px;
    }

    .coin-main-layout {
        gap: 10px;
        margin-bottom: 15px;
    }
}

/* Left Sidebar */
.coin-sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Right Content Area */
.coin-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

/* Gradient Backgrounds */
.gradient2 {
    background: radial-gradient(211.5% 113.1% at -66.4% 35.9%,
            #000000 39.13%,
            rgb(0, 0, 0) 51.42%,
            rgb(2, 12, 253) 80%,
            rgb(0, 255, 0) 100%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh !important;
    z-index: -1;
    opacity: 0.3;
    pointer-events: none;
}

.gradient3 {
    background: radial-gradient(211.5% 113.1% at -66.4% 35.9%,
            #000000 39.13%,
            rgb(0, 0, 0) 51.42%,
            rgb(2, 12, 253) 80%,
            rgb(255, 0, 0) 100%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh !important;
    z-index: -1;
    opacity: 0.3;
    pointer-events: none;
}

/* Performance Table */
.performance-table-wrapper {
    grid-column: 1 / -1;
    margin-top: 20px;
}

/* Mobile: Réduire la hauteur des gradients sur mobile pour économiser l'espace */
@media (max-width: 768px) {

    .gradient2,
    .gradient3 {
        height: 300px;
        opacity: 0.2;
    }
}

@media (max-width: 480px) {

    .gradient2,
    .gradient3 {
        height: 250px;
        opacity: 0.15;
    }
}
</style>

<template>
    <Menu />
    <div class="coin-page">
        <!-- Gradient Background -->


        <div class="coin-container">
            <!-- Main Layout: Sidebar + Content -->
            <div class="coin-main-layout">
                <!-- Left Sidebar -->
                <div class="coin-sidebar">
                    <CoinDetails :id="coinId" @price-change="handlePriceChange" />
                </div>

                <!-- Right Content -->
                <div class="coin-content">
                    <CoinChart :id="coinId" />
                </div>
            </div>

            <!-- Performance Table (Full Width) -->
            <div class="performance-table-wrapper">
                <CoinTimeTableFollow :id="coinId" />
            </div>

            <!-- Similar Coins Section (Full Width) -->
            <SimilarCoins :coin-id="coinId" />


        </div>



        <Footer />

        <div :class="{ 'gradient2': isPositiveChange, 'gradient3': !isPositiveChange }"></div>
    </div>
</template>

<script>
import CoinDetails from './components/CoinDetails.vue';
import CoinChart from './components/CoinChart.vue';
import CoinTimeTableFollow from './components/CoinTimeTableFollow.vue';
import CoinDesc from './components/CoinDesc.vue';
import SimilarCoins from './components/SimilarCoins.vue';
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'Coin',
    components: {
        CoinDetails,
        CoinChart,
        CoinTimeTableFollow,
        CoinDesc,
        SimilarCoins,
        Menu,
        Footer,
    },
    data() {
        return {
            coinId: '',
            isPositiveChange: true,
        };
    },
    methods: {
        handlePriceChange(isPositiveChange) {
            this.isPositiveChange = isPositiveChange;
        },
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(newId) {
                this.coinId = newId || '';
            },
        },
    },
};
</script>