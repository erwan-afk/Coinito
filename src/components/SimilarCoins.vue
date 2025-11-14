<style>
.similar-coins-section {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 32px;
    color: white;
    margin-top: 40px;
}

.similar-coins-title {
    margin-bottom: 24px;
}

.similar-coins-title h2 {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: white;
}

.similar-coins-subtitle {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
}

.similar-coins-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.similar-coin-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 20px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.similar-coin-card:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.similar-coin-header {
    display: flex;
    align-items: center;
    gap: 12px;
}

.similar-coin-logo {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.similar-coin-info {
    flex: 1;
}

.similar-coin-name {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 4px;
}

.similar-coin-symbol {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
}

.similar-coin-rank {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 6px;
}

.similar-coin-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.similar-coin-price-value {
    font-size: 20px;
    font-weight: 700;
}

.similar-coin-price-change {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;
    font-weight: 600;
}

.similar-coin-price-change.pos {
    color: #00ff00;
}

.similar-coin-price-change.neg {
    color: #ff0000;
}

.similar-coin-stats {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.similar-coin-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.stat-label {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
}

.stat-value {
    font-size: 14px;
    font-weight: 600;
    color: white;
}

/* Desktop Ultra Large */
@media (min-width: 1920px) {
    .similar-coins-section {
        padding: 40px 32px;
    }

    .similar-coins-title h2 {
        font-size: 32px;
        margin-bottom: 16px;
    }

    .similar-coins-subtitle {
        font-size: 16px;
    }

    .similar-coins-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .similar-coin-card {
        padding: 24px;
        border-radius: 16px;
    }

    .similar-coin-header {
        gap: 14px;
        margin-bottom: 14px;
    }

    .similar-coin-logo {
        width: 48px;
        height: 48px;
    }

    .similar-coin-name {
        font-size: 18px;
    }

    .similar-coin-symbol {
        font-size: 14px;
    }

    .similar-coin-price-value {
        font-size: 20px;
    }

    .similar-coin-price-change {
        font-size: 16px;
    }
}

/* Desktop Large */
@media (min-width: 1440px) and (max-width: 1919px) {
    .similar-coins-section {
        padding: 36px 28px;
    }

    .similar-coins-title h2 {
        font-size: 30px;
    }

    .similar-coins-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
    }

    .similar-coin-card {
        padding: 22px;
    }

    .similar-coin-price-value {
        font-size: 19px;
    }
}

/* Desktop Compact */
@media (min-width: 1366px) and (max-width: 1439px) {
    .similar-coins-section {
        padding: 32px 24px;
    }

    .similar-coins-title h2 {
        font-size: 28px;
    }

    .similar-coins-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .similar-coin-card {
        padding: 20px;
    }
}

/* Laptop Large */
@media (min-width: 1280px) and (max-width: 1365px) {
    .similar-coins-section {
        padding: 28px 20px;
    }

    .similar-coins-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
    }

    .similar-coin-card {
        padding: 18px;
    }
}

/* Tablettes */
@media (max-width: 1279px) {
    .similar-coins-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .similar-coins-section {
        padding: 24px 20px;
    }

    .similar-coins-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .similar-coins-title h2 {
        font-size: 22px;
    }

    .similar-coins-subtitle {
        font-size: 13px;
    }

    .similar-coin-card {
        padding: 14px;
    }

    .similar-coin-header {
        gap: 10px;
    }

    .similar-coin-logo {
        width: 36px;
        height: 36px;
    }

    .similar-coin-name {
        font-size: 15px;
    }

    .similar-coin-symbol {
        font-size: 12px;
    }

    .similar-coin-price-value {
        font-size: 16px;
    }

    .similar-coin-price-change {
        font-size: 13px;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .similar-coins-section {
        padding: 20px 15px;
    }

    .similar-coins-title h2 {
        font-size: 20px;
    }

    .similar-coins-subtitle {
        font-size: 12px;
    }

    .similar-coin-card {
        padding: 12px;
    }

    .similar-coin-logo {
        width: 32px;
        height: 32px;
    }

    .similar-coin-name {
        font-size: 14px;
    }

    .similar-coin-price-value {
        font-size: 15px;
    }

    .similar-coin-price-change {
        font-size: 12px;
    }
}
</style>

<template>
    <div class="similar-coins-section" v-if="similarCoins.length > 0">
        <div class="similar-coins-title">
            <h2>Coins similaires</h2>
            <p class="similar-coins-subtitle">Autres cryptomonnaies dans les mêmes catégories</p>
        </div>
        <div class="similar-coins-grid">
            <router-link v-for="coin in similarCoins" :key="coin.id" :to="'/coin/' + coin.id" class="similar-coin-card">
                <div class="similar-coin-header">
                    <img :src="coin.image" :alt="coin.name" class="similar-coin-logo">
                    <div class="similar-coin-info">
                        <div class="similar-coin-name">{{ coin.name }}</div>
                        <div class="similar-coin-symbol">{{ coin.symbol.toUpperCase() }}</div>
                    </div>
                    <div class="similar-coin-rank">#{{ coin.market_cap_rank }}</div>
                </div>
                <div class="similar-coin-price">
                    <div class="similar-coin-price-value">{{ formatCurrency(coin.current_price) }}</div>
                    <div class="similar-coin-price-change"
                        :class="{ 'pos': coin.price_change_percentage_24h >= 0, 'neg': coin.price_change_percentage_24h < 0 }">
                        <span>{{ coin.price_change_percentage_24h >= 0 ? '▲' : '▼' }}</span>
                        <span>{{ Math.abs(coin.price_change_percentage_24h).toFixed(2) }}%</span>
                    </div>
                </div>
                <div class="similar-coin-stats">
                    <div class="similar-coin-stat">
                        <span class="stat-label">Market Cap</span>
                        <span class="stat-value">{{ formatCurrency(coin.market_cap) }}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { getSimilarCoins } from '@/services/api/SimilarCoinsRepository.js';

export default {
    name: 'SimilarCoins',
    props: {
        coinId: { type: String, required: true },
    },
    data() {
        return {
            similarCoins: [],
            isLoadingSimilarCoins: false,
        };
    },
    methods: {
        async retrieveSimilarCoins() {
            this.isLoadingSimilarCoins = true;
            try {
                const coins = await getSimilarCoins(this.coinId, 6);
                this.similarCoins = coins;
                console.log('🪙 Similar coins loaded:', coins.length);
            } catch (error) {
                console.error('Erreur lors de la récupération des coins similaires:', error);
                this.similarCoins = [];
            } finally {
                this.isLoadingSimilarCoins = false;
            }
        },
        formatCurrency(value) {
            if (!value && value !== 0) return 'N/A';
            if (value >= 1000000000) {
                return '$' + (value / 1000000000).toFixed(2) + 'B';
            } else if (value >= 1000000) {
                return '$' + (value / 1000000).toFixed(2) + 'M';
            } else if (value >= 1000) {
                return '$' + (value / 1000).toFixed(2) + 'K';
            }
            return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },
    },
    watch: {
        coinId() {
            this.retrieveSimilarCoins();
        },
    },
    created() {
        this.retrieveSimilarCoins();
    },
};
</script>
