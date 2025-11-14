<style>
.coin-details-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    color: white;
    width: 100%;
    box-sizing: border-box;
    min-height: fit-content;
}

/* Header */
.coin-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
    flex-wrap: wrap;
    gap: 12px;
}

.coin-title-section {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
    /* Allow text to wrap */
}

.coin-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    /* Prevent logo from shrinking */
}

.coin-title-text h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    min-width: 0;
    /* Allow text wrapping */
}

.coin-symbol {
    color: rgba(255, 255, 255, 0.6);
    font-size: 20px;
    font-weight: 400;
}

.coin-rank {
    background-color: rgba(255, 255, 255, 0.9);
    color: #000;
    font-size: 13px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 8px;
}

/* Price Section */
.coin-price-section {
    margin-bottom: 24px;
}

.coin-price {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 8px;
}

.coin-price-change {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 600;
}

.coin-price-change.pos {
    color: #00ff00;
}

.coin-price-change.neg {
    color: #ff0000;
}

.coin-btc-price {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-top: 8px;
}

/* 24h Range Bar */
.range-section {
    margin-bottom: 24px;
}

.range-label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.8);
}

.range-bar {
    background: linear-gradient(90deg, #ff4444 0%, #ffaa00 50%, #00ff00 100%);
    height: 6px;
    border-radius: 3px;
    position: relative;
    margin-bottom: 8px;
}

.range-indicator {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    border: 3px solid #000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    z-index: 2;
    transition: left 0.3s ease;
}

.range-values {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
}

/* Info Section */
.coin-info-section {
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
}

.info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 8px;
}

.info-row:last-child {
    border-bottom: none;
}

.info-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    flex: 1;
    min-width: 0;
    /* Allow text wrapping */
}

.info-value {
    font-size: 15px;
    font-weight: 600;
    text-align: right;
    flex-shrink: 0;
    word-break: break-all;
    max-width: 100%;
}

.info-icon {
    width: 16px;
    height: 16px;
    opacity: 0.6;
    cursor: help;
}

/* Extra Links Section */
.coin-links {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    box-sizing: border-box;
}

.links-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.8);
    width: 100%;
}

.link-buttons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
}

.link-btn {
    padding: 8px 12px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    color: white;
    font-size: 13px;
    text-decoration: none;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.link-btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
}

/* Similar Coins Section */
.similar-coins-section {
    margin-top: 32px;
    padding-top: 32px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    box-sizing: border-box;
}

.similar-coins-title {
    margin-bottom: 24px;
    width: 100%;
}

.similar-coins-title h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: white;
}

.similar-coins-subtitle {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
}

.similar-coins-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    width: 100%;
}

.similar-coin-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 16px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
}

@media (max-width: 768px) {
    .coin-price {
        font-size: 36px;
    }

    .coin-header {
        flex-direction: column;
        gap: 12px;
    }

    .similar-coins-grid {
        grid-template-columns: 1fr;
    }
}

/* Desktop Ultra Large */
@media (min-width: 1920px) {
    .coin-details-card {
        padding: 32px;
    }

    .coin-price {
        font-size: 56px;
        line-height: 1.1;
    }

    .coin-info-section {
        border-radius: 16px;
    }

    .info-row {
        padding: 20px 24px;
        font-size: 16px;
    }

    .similar-coins-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .similar-coin-card {
        padding: 20px;
        border-radius: 14px;
    }
}

/* Desktop Large */
@media (min-width: 1440px) and (max-width: 1919px) {
    .coin-details-card {
        padding: 28px;
    }

    .coin-price {
        font-size: 52px;
    }

    .info-row {
        padding: 18px 22px;
    }

    .similar-coins-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
    }
}

/* Desktop Compact */
@media (min-width: 1366px) and (max-width: 1439px) {
    .coin-details-card {
        padding: 24px;
    }

    .coin-price {
        font-size: 48px;
    }

    .info-row {
        padding: 16px 20px;
    }

    .similar-coins-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}

/* Tablettes */
@media (max-width: 1365px) {
    .coin-details-card {
        padding: 20px;
        border-radius: 12px;
    }

    .coin-price {
        font-size: 42px;
    }

    .coin-info-section {
        border-radius: 10px;
    }

    .info-row {
        padding: 14px 18px;
    }

    .similar-coins-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 14px;
    }
}

/* Mobile amélioré */
@media (max-width: 768px) {
    .coin-details-card {
        padding: 16px;
        border-radius: 10px;
    }

    .coin-price {
        font-size: 32px;
        line-height: 1.1;
    }

    .coin-price-change {
        font-size: 16px;
        gap: 6px;
    }

    .coin-btc-price {
        font-size: 14px;
        margin-top: 6px;
    }

    .coin-header {
        flex-direction: column;
        gap: 12px;
        margin-bottom: 16px;
    }

    .coin-title-section {
        gap: 10px;
    }

    .coin-logo {
        width: 36px;
        height: 36px;
    }

    .coin-title-text h1 {
        font-size: 22px;
    }

    .coin-symbol {
        font-size: 18px;
    }

    .coin-rank {
        font-size: 12px;
        padding: 5px 10px;
        align-self: flex-start;
    }

    .range-section {
        margin-bottom: 20px;
    }

    .range-values {
        font-size: 13px;
    }

    .coin-info-section {
        border-radius: 8px;
    }

    .info-row {
        padding: 12px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }

    .info-row:last-child {
        border-bottom: none;
    }

    .info-label {
        font-size: 13px;
        margin-bottom: 2px;
    }

    .info-value {
        font-size: 14px;
        text-align: left;
        width: 100%;
        word-break: break-all;
    }

    .coin-links {
        margin-top: 16px;
        padding-top: 16px;
    }

    .links-title {
        font-size: 13px;
        margin-bottom: 10px;
    }

    .link-buttons {
        gap: 6px;
        flex-wrap: wrap;
    }

    .link-btn {
        font-size: 12px;
        padding: 6px 10px;
    }

    .similar-coins-section {
        margin-top: 24px;
        padding-top: 24px;
    }

    .similar-coins-title h2 {
        font-size: 20px;
    }

    .similar-coins-subtitle {
        font-size: 13px;
    }

    .similar-coins-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .similar-coin-card {
        padding: 14px;
        border-radius: 10px;
    }

    .similar-coin-header {
        gap: 10px;
        margin-bottom: 10px;
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

    .similar-coin-price {
        padding-top: 6px;
    }

    .similar-coin-price-value {
        font-size: 16px;
    }

    .similar-coin-price-change {
        font-size: 13px;
    }

    .similar-coin-stats {
        gap: 6px;
    }

    .stat-label {
        font-size: 11px;
    }

    .stat-value {
        font-size: 12px;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .coin-details-card {
        padding: 12px;
    }

    .coin-price {
        font-size: 28px;
    }

    .coin-price-change {
        font-size: 14px;
    }

    .coin-btc-price {
        font-size: 13px;
    }

    .coin-title-text h1 {
        font-size: 20px;
    }

    .coin-symbol {
        font-size: 16px;
    }

    .coin-logo {
        width: 32px;
        height: 32px;
    }

    .range-label {
        font-size: 13px;
        margin-bottom: 6px;
    }

    .range-bar {
        height: 5px;
        margin-bottom: 6px;
    }

    .range-indicator {
        width: 14px;
        height: 14px;
    }

    .info-row {
        padding: 10px 12px;
    }

    .similar-coins-title h2 {
        font-size: 18px;
    }

    .similar-coin-card {
        padding: 12px;
    }

    .similar-coin-price-value {
        font-size: 15px;
    }
}
</style>

<template>
    <LoadingSpinner v-if="isLoading" message="Chargement des détails..." />
    <div v-else class="coin-details-card" v-if="CoinDetails.image && CoinDetails.market_data">
        <!-- Header: Logo, Name, Rank -->
        <div class="coin-header">
            <div class="coin-title-section">
                <img :src="CoinDetails.image.large" :alt="CoinDetails.name" class="coin-logo">
                <div class="coin-title-text">
                    <h1>
                        {{ CoinDetails.name }}
                        <span class="coin-symbol">{{ CoinDetails.symbol.toUpperCase() }}</span>
                    </h1>
                </div>
            </div>
            <div class="coin-rank">#{{ CoinDetails.market_data.market_cap_rank }}</div>
        </div>

        <!-- Price Section -->
        <div class="coin-price-section">
            <div class="coin-price">{{ formatCurrency(CoinDetails.market_data.current_price.usd) }}</div>
            <div class="coin-price-change" :class="{ 'pos': isPositiveChange, 'neg': !isPositiveChange }">
                <span>{{ isPositiveChange ? '▲' : '▼' }}</span>
                <span>{{ formattedPrice.formattedPriceChangePercentage24h }}% (24h)</span>
            </div>
            <div class="coin-btc-price">
                {{ CoinDetails.market_data.current_price.btc }} BTC
                <span style="color: rgba(255, 255, 255, 0.5);">▲ {{
                    Math.abs(CoinDetails.market_data.price_change_percentage_24h_in_currency?.btc || 0).toFixed(2)
                    }}%</span>
            </div>
        </div>

        <!-- 24h Range Bar -->
        <div class="range-section" v-if="CoinDetails.market_data">
            <div class="range-label">
                24h Range

            </div>
            <div class="range-bar">
                <div class="range-indicator" :style="{ left: currentPriceWidth }"></div>
            </div>
            <div class="range-values">
                <span>Low: {{ formatCurrency(CoinDetails.market_data.low_24h.usd) }}</span>
                <span>High: {{ formatCurrency(CoinDetails.market_data.high_24h.usd) }}</span>
            </div>
            <div style="text-align: center; margin-top: 4px; font-size: 12px; opacity: 0.7;">
                Current: {{ formatCurrency(CoinDetails.market_data.current_price.usd) }}
            </div>
        </div>

        <!-- Info Section -->
        <div class="coin-info-section">
            <div class="info-row">
                <div class="info-label">Market Cap</div>
                <div class="info-value">{{ formatCurrency(CoinDetails.market_data.market_cap.usd) }}</div>
            </div>

            <div class="info-row">
                <div class="info-label">Fully Diluted Valuation</div>
                <div class="info-value">{{ formatCurrency(CoinDetails.market_data.fully_diluted_valuation?.usd) }}</div>
            </div>

            <div class="info-row">
                <div class="info-label">24 Hour Trading Vol</div>
                <div class="info-value">{{ formatCurrency(CoinDetails.market_data.total_volume.usd) }}</div>
            </div>

            <div class="info-row">
                <div class="info-label">Circulating Supply</div>
                <div class="info-value">{{ formatNumber(CoinDetails.market_data.circulating_supply) }}</div>
            </div>

            <div class="info-row">
                <div class="info-label">Total Supply</div>
                <div class="info-value">{{ formatNumber(CoinDetails.market_data.total_supply) || 'N/A' }}</div>
            </div>

            <div class="info-row">
                <div class="info-label">Max Supply</div>
                <div class="info-value">{{ formatNumber(CoinDetails.market_data.max_supply) || '∞' }}</div>
            </div>

            <div class="info-row">
                <div class="info-label">All-Time High</div>
                <div class="info-value">
                    {{ formatCurrency(CoinDetails.market_data.ath.usd) }}
                    <div style="font-size: 12px; color: #ff4444;">
                        {{ CoinDetails.market_data.ath_change_percentage.usd.toFixed(1) }}%
                    </div>
                    <div style="font-size: 11px; color: rgba(255,255,255,0.5);">
                        {{ formatDate(CoinDetails.market_data.ath_date.usd) }}
                    </div>
                </div>
            </div>

            <div class="info-row">
                <div class="info-label">All-Time Low</div>
                <div class="info-value">
                    {{ formatCurrency(CoinDetails.market_data.atl.usd) }}
                    <div style="font-size: 12px; color: #00ff00;">
                        {{ Math.abs(CoinDetails.market_data.atl_change_percentage.usd).toFixed(1) }}%
                    </div>
                    <div style="font-size: 11px; color: rgba(255,255,255,0.5);">
                        {{ formatDate(CoinDetails.market_data.atl_date.usd) }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Links Section -->
        <div class="coin-links" v-if="CoinDetails.links">
            <div class="links-title">Info</div>
            <div class="link-buttons">
                <a v-if="CoinDetails.links.homepage && CoinDetails.links.homepage[0]"
                    :href="CoinDetails.links.homepage[0]" target="_blank" class="link-btn">
                    🌐 Website
                </a>
                <a v-if="CoinDetails.links.whitepaper" :href="CoinDetails.links.whitepaper" target="_blank"
                    class="link-btn">
                    📄 Whitepaper
                </a>
                <a v-if="CoinDetails.links.blockchain_site && CoinDetails.links.blockchain_site[0]"
                    :href="CoinDetails.links.blockchain_site[0]" target="_blank" class="link-btn">
                    🔍 Explorer
                </a>
            </div>
        </div>
    </div>
</template>


<script>
import { getSpecificCoinData } from '@/services/api/SpecificCoinRepository.js';
import LoadingSpinner from './LoadingSpinner.vue';
import { useErrorHandler } from '@/composables/useErrorHandler.js';

export default {
    name: 'CoinDetails',
    components: {
        LoadingSpinner,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            CoinDetails: [],
            currentPriceWidth: '50%', // Start at middle
            isLoading: false,
        };
    },
    emits: ['price-change'],
    watch: {
        id() {
            this.retrieveSpecificCoinData();
        },
        'CoinDetails.market_data': {
            handler() {
                // Update range indicator when market data changes
                if (this.CoinDetails?.market_data) {
                    this.$nextTick(() => {
                        this.updateCurrentPriceWidth();
                    });
                }
            },
            deep: true
        },
        'CoinDetails.market_data.price_change_percentage_24h': function (newValue) {
            const isPositiveChange = newValue >= 0;
            this.$emit('price-change', isPositiveChange);
        }
    },
    methods: {
        async retrieveSpecificCoinData() {
            this.isLoading = true;
            try {
                const data = await getSpecificCoinData(this.id);
                this.CoinDetails = data;
                console.log('📦 Data loaded, updating range indicator...');
                // Force update on next tick to ensure DOM is updated
                this.$nextTick(() => {
                    this.updateCurrentPriceWidth();
                });
            } catch (error) {
                const { handleApiError, showErrorNotification } = useErrorHandler();
                const errorInfo = handleApiError(error, 'CoinDetails');
                showErrorNotification(errorInfo.message);
            } finally {
                this.isLoading = false;
            }
        },
        updateCurrentPriceWidth() {
            console.log('🔄 updateCurrentPriceWidth called');

            // Check if all required data is available
            if (!this.CoinDetails?.market_data?.current_price?.usd ||
                !this.CoinDetails?.market_data?.low_24h?.usd ||
                !this.CoinDetails?.market_data?.high_24h?.usd) {
                console.warn('⚠️ Missing price data for range indicator:', {
                    current: this.CoinDetails?.market_data?.current_price?.usd,
                    low: this.CoinDetails?.market_data?.low_24h?.usd,
                    high: this.CoinDetails?.market_data?.high_24h?.usd
                });
                this.currentPriceWidth = '50%';
                return;
            }

            const currentPrice = this.CoinDetails.market_data.current_price.usd;
            const lowPrice = this.CoinDetails.market_data.low_24h.usd;
            const highPrice = this.CoinDetails.market_data.high_24h.usd;

            console.log('💰 Price data:', { current: currentPrice, low: lowPrice, high: highPrice });

            // Avoid division by zero
            if (highPrice === lowPrice) {
                console.warn('⚠️ High and low prices are equal');
                this.currentPriceWidth = '50%';
                return;
            }

            const diffFromLow = currentPrice - lowPrice;
            const diffBetweenHighAndLow = highPrice - lowPrice;
            const currentPriceWidthPercentage = (diffFromLow / diffBetweenHighAndLow) * 100;

            // Clamp between 0% and 100%
            const clampedPercentage = Math.max(0, Math.min(100, currentPriceWidthPercentage));

            this.currentPriceWidth = clampedPercentage + '%';
            console.log('📍 Range indicator set to:', this.currentPriceWidth, `(${clampedPercentage.toFixed(1)}%)`);
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
        formatNumber(value) {
            if (!value && value !== 0) return 'N/A';
            if (value >= 1000000000) {
                return (value / 1000000000).toFixed(2) + 'B';
            } else if (value >= 1000000) {
                return (value / 1000000).toFixed(2) + 'M';
            } else if (value >= 1000) {
                return (value / 1000).toFixed(2) + 'K';
            }
            return value.toLocaleString('en-US');
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            const now = new Date();
            const diffTime = Math.abs(now - date);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays < 30) {
                return diffDays + ' days ago';
            } else if (diffDays < 365) {
                return Math.floor(diffDays / 30) + ' months ago';
            } else {
                return Math.floor(diffDays / 365) + ' years ago';
            }
        }
    },
    created() {
        this.retrieveSpecificCoinData();
    },
    mounted() {
        console.log('🎬 CoinDetails mounted, checking for data...');
        // Update range indicator if data is already loaded
        if (this.CoinDetails?.market_data) {
            console.log('✅ Data already available in mounted');
            this.$nextTick(() => {
                this.updateCurrentPriceWidth();
            });
        } else {
            console.log('⏳ Waiting for data to load...');
        }
    },
    computed: {
        isPositiveChange() {
            return this.CoinDetails.market_data?.price_change_percentage_24h >= 0;
        },
        formattedPrice() {
            const internationalNumberFormat = new Intl.NumberFormat('en-US')
            return {
                formattedPriceChangePercentage24h: internationalNumberFormat.format(Math.abs(this.CoinDetails.market_data?.price_change_percentage_24h?.toFixed(2) || 0))
            };
        },
    },


};
</script>
