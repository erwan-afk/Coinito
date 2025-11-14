<style>
.performance-table {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    color: white;
    overflow-x: auto;
}

.performance-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
}

.compare-section {
    margin-bottom: 15px;
}

.compare-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 10px;
}

.compare-checkboxes {
    display: flex;
    gap: 15px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
}

.checkbox-label input {
    cursor: pointer;
}

.checkbox-label.disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.checkbox-label.disabled input {
    cursor: not-allowed;
}

.table-wrapper {
    overflow-x: auto;

}

.table-wrapper::-webkit-scrollbar {

    display: none;

}

.performance-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    overflow: hidden;
    min-width: 600px;
}

.perf-header,
.perf-cell {
    padding: 16px 20px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
}

.perf-header {
    font-weight: 700;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(255, 255, 255, 0.08);
}

.perf-cell {
    font-size: 16px;
    font-weight: 600;
}

.perf-cell.positive {
    color: #00ff00;
}

.perf-cell.negative {
    color: #ff4444;
}

/* Desktop Ultra Large */
@media (min-width: 1920px) {
    .performance-table {
        padding: 32px;
        border-radius: 16px;
    }

    .performance-title {
        font-size: 28px;
        margin-bottom: 24px;
    }

    .compare-section {
        margin-bottom: 20px;
    }

    .compare-label {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .performance-grid {
        font-size: 16px;
        gap: 2px;
    }

    .perf-header,
    .perf-cell {
        padding: 16px 18px;
    }

    .checkbox-label {
        font-size: 15px;
        padding: 10px 14px;
    }
}

/* Desktop Large */
@media (min-width: 1440px) and (max-width: 1919px) {
    .performance-table {
        padding: 28px;
        border-radius: 14px;
    }

    .performance-title {
        font-size: 26px;
        margin-bottom: 22px;
    }

    .performance-grid {
        font-size: 15px;
        gap: 1px;
    }

    .perf-header,
    .perf-cell {
        padding: 15px 16px;
    }
}

/* Desktop Compact */
@media (min-width: 1366px) and (max-width: 1439px) {
    .performance-table {
        padding: 24px;
    }

    .performance-title {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .performance-grid {
        font-size: 14px;
    }

    .perf-header,
    .perf-cell {
        padding: 14px 14px;
    }
}

/* Laptop Large */
@media (min-width: 1280px) and (max-width: 1365px) {
    .performance-table {
        padding: 20px;
    }

    .performance-grid {
        font-size: 13px;
    }

    .perf-header,
    .perf-cell {
        padding: 12px 12px;
    }
}

/* Tablettes */
@media (max-width: 1279px) {
    .performance-table {
        padding: 20px;
    }

    .performance-grid {
        font-size: 14px;
    }

    .perf-header,
    .perf-cell {
        padding: 14px 12px;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .performance-table {
        padding: 16px;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .performance-title {
        font-size: 18px;
        margin-bottom: 16px;
    }

    .compare-section {
        margin-bottom: 16px;
    }

    .compare-label {
        font-size: 14px;
        margin-bottom: 8px;
    }

    .compare-checkboxes {
        gap: 12px;
    }

    .checkbox-label {
        font-size: 13px;
        padding: 6px 10px;
    }

    .checkbox-label span {
        font-size: 13px;
    }

    /* Table devient scrollable horizontalement sur mobile */
    .performance-grid {
        min-width: 600px;
        /* Largeur minimale pour lisibilité */
        font-size: 13px;
    }

    .perf-header,
    .perf-cell {
        padding: 10px 8px;
        white-space: nowrap;
    }

    .perf-header {
        font-weight: 600;
    }


}

/* Small Mobile */
@media (max-width: 480px) {
    .performance-table {
        padding: 12px;
    }

    .performance-title {
        font-size: 16px;
    }

    .performance-grid {
        min-width: 550px;
        font-size: 12px;
    }

    .perf-header,
    .perf-cell {
        padding: 8px 6px;
    }

    .compare-checkboxes {
        flex-direction: column;
        gap: 8px;
    }

    .checkbox-label {
        padding: 5px 8px;
        font-size: 12px;
    }
}
</style>

<template>
    <div v-if="CoinTimeTableFollow.market_data" class="performance-table">
        <!-- Title -->
        <div class="performance-title">Performance Comparison</div>

        <!-- Compare With Section -->
        <div class="compare-section">
            <div class="compare-label">Compare with:</div>
            <div class="compare-checkboxes">
                <label class="checkbox-label" :class="{ 'disabled': isCurrentCoinBTC }">
                    <input type="checkbox" v-model="compareBTC" @change="toggleBTCComparison"
                        :disabled="isCurrentCoinBTC" />
                    <span>BTC</span>
                </label>
                <label class="checkbox-label" :class="{ 'disabled': isCurrentCoinETH }">
                    <input type="checkbox" v-model="compareETH" @change="toggleETHComparison"
                        :disabled="isCurrentCoinETH" />
                    <span>ETH</span>
                </label>
            </div>
        </div>

        <!-- Performance Grid -->
        <div class="table-wrapper">
            <div class="performance-grid" :style="{ gridTemplateColumns: 'repeat(6, 1fr)' }">
                <!-- Headers -->
                <div class="perf-header">1h</div>
                <div class="perf-header">24h</div>
                <div class="perf-header">7d</div>
                <div class="perf-header">14d</div>
                <div class="perf-header">30d</div>
                <div class="perf-header">1y</div>

                <!-- Main Coin Values -->
                <div class="perf-cell" :class="{ 'positive': is1hPositive, 'negative': !is1hPositive }">
                    {{ is1hPositive ? '▲' : '▼' }} {{ formattedPrice.formattedPriceChangePercentage1h }}%
                </div>
                <div class="perf-cell" :class="{ 'positive': is24hPositive, 'negative': !is24hPositive }">
                    {{ is24hPositive ? '▲' : '▼' }} {{ formattedPrice.formattedPriceChangePercentage24h }}%
                </div>
                <div class="perf-cell" :class="{ 'positive': is7dPositive, 'negative': !is7dPositive }">
                    {{ is7dPositive ? '▲' : '▼' }} {{ formattedPrice.formattedPriceChangePercentage7d }}%
                </div>
                <div class="perf-cell" :class="{ 'positive': is14dPositive, 'negative': !is14dPositive }">
                    {{ is14dPositive ? '▲' : '▼' }} {{ formattedPrice.formattedPriceChangePercentage14d }}%
                </div>
                <div class="perf-cell" :class="{ 'positive': is30dPositive, 'negative': !is30dPositive }">
                    {{ is30dPositive ? '▲' : '▼' }} {{ formattedPrice.formattedPriceChangePercentage30d }}%
                </div>
                <div class="perf-cell" :class="{ 'positive': is1yPositive, 'negative': !is1yPositive }">
                    {{ is1yPositive ? '▲' : '▼' }} {{ formattedPrice.formattedPriceChangePercentage1y }}%
                </div>

                <!-- BTC Comparison Row -->
                <template v-if="compareBTC && BTCData">
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': BTCData.market_data?.price_change_percentage_1h_in_currency?.usd >= 0,
                        'negative': BTCData.market_data?.price_change_percentage_1h_in_currency?.usd < 0
                    }">
                        BTC: {{ BTCData.market_data?.price_change_percentage_1h_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(BTCData.market_data?.price_change_percentage_1h_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': BTCData.market_data?.price_change_percentage_24h_in_currency?.usd >= 0,
                        'negative': BTCData.market_data?.price_change_percentage_24h_in_currency?.usd < 0
                    }">
                        BTC: {{ BTCData.market_data?.price_change_percentage_24h_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(BTCData.market_data?.price_change_percentage_24h_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': BTCData.market_data?.price_change_percentage_7d_in_currency?.usd >= 0,
                        'negative': BTCData.market_data?.price_change_percentage_7d_in_currency?.usd < 0
                    }">
                        BTC: {{ BTCData.market_data?.price_change_percentage_7d_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(BTCData.market_data?.price_change_percentage_7d_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': BTCData.market_data?.price_change_percentage_14d_in_currency?.usd >= 0,
                        'negative': BTCData.market_data?.price_change_percentage_14d_in_currency?.usd < 0
                    }">
                        BTC: {{ BTCData.market_data?.price_change_percentage_14d_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(BTCData.market_data?.price_change_percentage_14d_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': BTCData.market_data?.price_change_percentage_30d_in_currency?.usd >= 0,
                        'negative': BTCData.market_data?.price_change_percentage_30d_in_currency?.usd < 0
                    }">
                        BTC: {{ BTCData.market_data?.price_change_percentage_30d_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(BTCData.market_data?.price_change_percentage_30d_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': BTCData.market_data?.price_change_percentage_1y_in_currency?.usd >= 0,
                        'negative': BTCData.market_data?.price_change_percentage_1y_in_currency?.usd < 0
                    }">
                        BTC: {{ BTCData.market_data?.price_change_percentage_1y_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(BTCData.market_data?.price_change_percentage_1y_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                </template>

                <!-- ETH Comparison Row -->
                <template v-if="compareETH && ETHData">
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': ETHData.market_data?.price_change_percentage_1h_in_currency?.usd >= 0,
                        'negative': ETHData.market_data?.price_change_percentage_1h_in_currency?.usd < 0
                    }">
                        ETH: {{ ETHData.market_data?.price_change_percentage_1h_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(ETHData.market_data?.price_change_percentage_1h_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': ETHData.market_data?.price_change_percentage_24h_in_currency?.usd >= 0,
                        'negative': ETHData.market_data?.price_change_percentage_24h_in_currency?.usd < 0
                    }">
                        ETH: {{ ETHData.market_data?.price_change_percentage_24h_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(ETHData.market_data?.price_change_percentage_24h_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': ETHData.market_data?.price_change_percentage_7d_in_currency?.usd >= 0,
                        'negative': ETHData.market_data?.price_change_percentage_7d_in_currency?.usd < 0
                    }">
                        ETH: {{ ETHData.market_data?.price_change_percentage_7d_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(ETHData.market_data?.price_change_percentage_7d_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': ETHData.market_data?.price_change_percentage_14d_in_currency?.usd >= 0,
                        'negative': ETHData.market_data?.price_change_percentage_14d_in_currency?.usd < 0
                    }">
                        ETH: {{ ETHData.market_data?.price_change_percentage_14d_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(ETHData.market_data?.price_change_percentage_14d_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': ETHData.market_data?.price_change_percentage_30d_in_currency?.usd >= 0,
                        'negative': ETHData.market_data?.price_change_percentage_30d_in_currency?.usd < 0
                    }">
                        ETH: {{ ETHData.market_data?.price_change_percentage_30d_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(ETHData.market_data?.price_change_percentage_30d_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                    <div class="perf-cell" style="font-size: 13px; opacity: 0.8;" :class="{
                        'positive': ETHData.market_data?.price_change_percentage_1y_in_currency?.usd >= 0,
                        'negative': ETHData.market_data?.price_change_percentage_1y_in_currency?.usd < 0
                    }">
                        ETH: {{ ETHData.market_data?.price_change_percentage_1y_in_currency?.usd >= 0 ? '▲' : '▼' }}
                        {{ Math.abs(ETHData.market_data?.price_change_percentage_1y_in_currency?.usd || 0).toFixed(1)
                        }}%
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>


<script>
import { getSpecificCoinData } from '@/services/api/SpecificCoinRepository.js';
import { useErrorHandler } from '@/composables/useErrorHandler.js';

export default {
    name: 'CoinTimeTableFollow',
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            CoinTimeTableFollow: [],
            BTCData: null,
            ETHData: null,
            compareBTC: false,
            compareETH: false,
        };
    },
    methods: {
        async retrieveSpecificCoinData() {
            try {
                const data = await getSpecificCoinData(this.id);
                this.CoinTimeTableFollow = data;
            } catch (error) {
                const { handleApiError } = useErrorHandler();
                handleApiError(error, 'CoinTimeTableFollow');
            }
        },
        async loadComparisonData(coinId) {
            try {
                const data = await getSpecificCoinData(coinId);
                return data;
            } catch (error) {
                const { handleApiError } = useErrorHandler();
                handleApiError(error, 'CoinTimeTableFollow - loadComparisonData');
                return null;
            }
        },
        async toggleBTCComparison() {
            // v-model already handles the toggle, so we just need to load data if checked
            if (this.compareBTC && !this.BTCData) {
                this.BTCData = await this.loadComparisonData('bitcoin');
            }
        },
        async toggleETHComparison() {
            // v-model already handles the toggle, so we just need to load data if checked
            if (this.compareETH && !this.ETHData) {
                this.ETHData = await this.loadComparisonData('ethereum');
            }
        }
    },
    created() {
        this.retrieveSpecificCoinData();
    },
    computed: {
        is1hPositive() {
            return this.CoinTimeTableFollow.market_data?.price_change_percentage_1h_in_currency?.usd >= 0;
        },
        is24hPositive() {
            return this.CoinTimeTableFollow.market_data?.price_change_percentage_24h_in_currency?.usd >= 0;
        },
        is7dPositive() {
            return this.CoinTimeTableFollow.market_data?.price_change_percentage_7d_in_currency?.usd >= 0;
        },
        is14dPositive() {
            return this.CoinTimeTableFollow.market_data?.price_change_percentage_14d_in_currency?.usd >= 0;
        },
        is30dPositive() {
            return this.CoinTimeTableFollow.market_data?.price_change_percentage_30d_in_currency?.usd >= 0;
        },
        is1yPositive() {
            return this.CoinTimeTableFollow.market_data?.price_change_percentage_1y_in_currency?.usd >= 0;
        },
        formattedPrice() {
            const internationalNumberFormat = new Intl.NumberFormat('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            return {
                formattedPriceChangePercentage1h: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data?.price_change_percentage_1h_in_currency?.usd?.toFixed(2) || 0)),
                formattedPriceChangePercentage24h: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data?.price_change_percentage_24h_in_currency?.usd?.toFixed(2) || 0)),
                formattedPriceChangePercentage7d: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data?.price_change_percentage_7d_in_currency?.usd?.toFixed(2) || 0)),
                formattedPriceChangePercentage14d: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data?.price_change_percentage_14d_in_currency?.usd?.toFixed(2) || 0)),
                formattedPriceChangePercentage30d: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data?.price_change_percentage_30d_in_currency?.usd?.toFixed(2) || 0)),
                formattedPriceChangePercentage1y: internationalNumberFormat.format(Math.abs(this.CoinTimeTableFollow.market_data?.price_change_percentage_1y_in_currency?.usd?.toFixed(2) || 0)),
            };
        },
        isCurrentCoinBTC() {
            return this.id?.toLowerCase() === 'bitcoin';
        },
        isCurrentCoinETH() {
            return this.id?.toLowerCase() === 'ethereum';
        },
    },
    watch: {
        id() {
            // Reset comparison data when coin changes
            this.compareBTC = false;
            this.compareETH = false;
            this.BTCData = null;
            this.ETHData = null;
            this.retrieveSpecificCoinData(); // Mettre à jour les données lorsque l'ID change
        },
    },

};
</script>
