<style>
.chart-wrapper {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 20px;
    color: white;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
}

/* Loading Overlay */
.chart-loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border-radius: 16px;
}

.spinner-container {
    text-align: center;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top-color: #00ff00;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 15px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.spinner-container p {
    color: white;
    font-size: 14px;
    margin: 0;
}

/* Chart Header Controls */
.chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.chart-type-controls {
    display: flex;
    gap: 8px;
    align-items: center;
}

.chart-type-btn {
    padding: 8px 16px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cooldown-indicator {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    padding: 4px 12px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }
}

.chart-type-btn.active {
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
}

.chart-type-btn:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
}

.chart-type-btn:disabled,
.chart-type-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed !important;
    pointer-events: none;
}

.chart-time-controls {
    display: flex;
    gap: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 4px;
    border-radius: 10px;
}

.time-btn {
    padding: 8px 14px;
    background-color: transparent;
    border: none;
    border-radius: 6px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.time-btn.active {
    background-color: rgba(0, 255, 0, 0.2);
    color: #00ff00;
}

.time-btn:hover:not(:disabled) {
    color: white;
}

.time-btn:disabled,
.time-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed !important;
    pointer-events: none;
}

.cooldown-indicator-small {
    font-size: 14px;
    animation: pulse 1s ease-in-out infinite;
}

/* Chart Canvas Container */
.chart_container {
    width: 100%;
    height: 450px;
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
}

.chart_container canvas {
    /* Laisser Chart.js gérer les dimensions naturellement */
    /* width et height sont gérés par Chart.js via resize() */
    max-width: 100%;
    display: block;
}

/* Historical Chart Section */
.historical-chart-section {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.historical-chart-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
    color: rgba(255, 255, 255, 0.8);
}

.historical-chart-container {
    width: 100%;
    height: 200px;
    position: relative;
}

/* Desktop Ultra Large */
@media (min-width: 1920px) {
    .chart-wrapper {
        padding: 32px;
        border-radius: 20px;
    }

    .chart-header {
        gap: 20px;
        margin-bottom: 24px;
    }

    .chart-type-controls {
        gap: 12px;
    }

    .chart-type-btn {
        padding: 10px 18px;
        font-size: 16px;
        font-weight: 600;
    }

    .chart-time-controls {
        gap: 6px;
    }

    .time-btn {
        padding: 10px 16px;
        font-size: 15px;
        font-weight: 600;
    }

    .cooldown-indicator {
        font-size: 13px;
        padding: 5px 12px;
    }

    .chart_container {
        height: 500px;
        margin-bottom: 24px;
    }

    .historical-chart-container {
        height: 220px;
    }
}

/* Desktop Large */
@media (min-width: 1440px) and (max-width: 1919px) {
    .chart-wrapper {
        padding: 28px;
        border-radius: 18px;
    }

    .chart-header {
        gap: 18px;
        margin-bottom: 22px;
    }

    .chart-type-btn {
        padding: 9px 16px;
        font-size: 15px;
    }

    .time-btn {
        padding: 9px 14px;
        font-size: 14px;
    }

    .chart_container {
        height: 460px;
        margin-bottom: 22px;
    }

    .historical-chart-container {
        height: 200px;
    }
}

/* Desktop Compact */
@media (min-width: 1366px) and (max-width: 1439px) {
    .chart-wrapper {
        padding: 24px;
        border-radius: 16px;
    }

    .chart-header {
        gap: 16px;
        margin-bottom: 20px;
    }

    .chart-type-btn {
        padding: 8px 14px;
        font-size: 14px;
    }

    .time-btn {
        padding: 8px 12px;
        font-size: 13px;
    }

    .chart_container {
        height: 420px;
        margin-bottom: 20px;
    }

    .historical-chart-container {
        height: 180px;
    }
}

/* Laptop Large */
@media (min-width: 1280px) and (max-width: 1365px) {
    .chart-wrapper {
        padding: 20px;
        border-radius: 14px;
    }

    .chart-header {
        gap: 14px;
        margin-bottom: 18px;
    }

    .chart_container {
        height: 380px;
        margin-bottom: 18px;
    }

    .historical-chart-container {
        height: 160px;
    }
}

/* Mobile */
@media (max-width: 1279px) {
    .chart-wrapper {
        padding: 16px;
        border-radius: 12px;
    }

    .chart-header {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
        margin-bottom: 16px;
    }

    .chart-type-controls {
        width: 100%;
        justify-content: center;
        gap: 6px;
    }

    .chart-type-btn {
        padding: 6px 12px;
        font-size: 13px;
        font-weight: 500;
    }

    .cooldown-indicator {
        font-size: 11px;
        padding: 3px 8px;
    }

    .chart-time-controls {
        width: fit-content;
        margin: 0 auto;
        padding: 3px;
        justify-content: center;
        gap: 2px;
    }

    .time-btn {
        padding: 6px 10px;
        font-size: 12px;
        font-weight: 500;
    }

    .cooldown-indicator-small {
        font-size: 12px;
    }

    .chart_container {
        height: 320px;
        margin-bottom: 16px;
    }

    .historical-chart-section {
        margin-top: 24px;
        padding-top: 16px;
    }

    .historical-chart-title {
        font-size: 14px;
        margin-bottom: 12px;
    }

    .historical-chart-container {
        height: 160px;
    }
}

/* Extra small mobile */
@media (max-width: 480px) {
    .chart-wrapper {
        padding: 12px;
    }

    .chart-header {
        gap: 10px;
        margin-bottom: 12px;
    }

    .chart-type-controls {
        gap: 4px;
    }

    .chart-type-btn {
        padding: 5px 10px;
        font-size: 12px;
    }

    .chart-time-controls {
        gap: 1px;
    }

    .time-btn {
        padding: 5px 8px;
        font-size: 11px;
    }

    .chart_container {
        height: 280px;
        margin-bottom: 12px;
    }

    .historical-chart-container {
        height: 140px;
    }

    .cooldown-indicator {
        font-size: 10px;
        padding: 2px 6px;
    }

    .cooldown-indicator-small {
        font-size: 11px;
    }
}
</style>

<template>
    <div class="chart-wrapper" :class="{ loading: isLoading }">
        <!-- Loading Overlay -->
        <div v-if="isLoading" class="chart-loading-overlay">
            <div class="spinner-container">
                <div class="spinner"></div>
                <p>Chargement du graphique...</p>
            </div>
        </div>

        <!-- Chart Header: Type Controls + Time Range Controls -->
        <div class="chart-header">
            <!-- Left: Chart Type Buttons -->
            <div class="chart-type-controls">
                <button class="chart-type-btn" :class="{ active: chartType === 'price', disabled: isChangingType }"
                    :disabled="isChangingType" @click="changeChartType('price')"
                    :title="isChangingType ? 'Please wait 2 seconds...' : 'Show price chart'">
                    📈 Price
                </button>
                <button class="chart-type-btn" :class="{ active: chartType === 'marketcap', disabled: isChangingType }"
                    :disabled="isChangingType" @click="changeChartType('marketcap')"
                    :title="isChangingType ? 'Please wait 2 seconds...' : 'Show market cap chart'">
                    💰 Market Cap
                </button>

                <!-- Cooldown Indicator -->
                <span v-if="isChangingType" class="cooldown-indicator">
                    ⏳ Wait 2s...
                </span>
            </div>

            <!-- Right: Time Range Buttons -->
            <div class="chart-time-controls">
                <button class="time-btn" :class="{ active: selectedTimeRange === '7d', disabled: isChangingTimeRange }"
                    :disabled="isChangingTimeRange" @click="changeTimeRange('7d')"
                    :title="isChangingTimeRange ? 'Please wait 2 seconds...' : '7 days'">
                    7D
                </button>
                <button class="time-btn" :class="{ active: selectedTimeRange === '1m', disabled: isChangingTimeRange }"
                    :disabled="isChangingTimeRange" @click="changeTimeRange('1m')"
                    :title="isChangingTimeRange ? 'Please wait 2 seconds...' : '1 month'">
                    1M
                </button>
                <button class="time-btn" :class="{ active: selectedTimeRange === '3m', disabled: isChangingTimeRange }"
                    :disabled="isChangingTimeRange" @click="changeTimeRange('3m')"
                    :title="isChangingTimeRange ? 'Please wait 2 seconds...' : '3 months'">
                    3M
                </button>
                <!-- Cooldown Indicator -->
                <span v-if="isChangingTimeRange" class="cooldown-indicator-small">⏳</span>
            </div>
        </div>

        <!-- Main Chart -->
        <div class="chart_container">
            <canvas ref="chartCanvas"></canvas>
        </div>

        <!-- Historical Chart (Small overview - 1 year) -->
        <div v-if="historicalChart.prices && historicalChart.prices.length > 0" class="historical-chart-section">
            <div class="historical-chart-title">Historical Overview (Past Year)</div>
            <div class="historical-chart-container">
                <canvas ref="historicalChartCanvas"></canvas>
            </div>
        </div>
        <div v-else-if="cache.historicalAttempted && (!historicalChart.prices || historicalChart.prices.length === 0)"
            class="historical-chart-section">
            <div class="historical-chart-title">Historical Overview</div>
            <div style="padding: 40px; text-align: center; color: rgba(255, 255, 255, 0.5); font-size: 14px;">
                ⚠️ Historical data unavailable (API rate limit reached)
            </div>
        </div>
    </div>
</template>





<script>
import { getCoinChartData } from '@/services/api/CoinChartRepository.js';
import { getSpecificCoinData } from '@/services/api/SpecificCoinRepository.js';
import { Chart } from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
import { useErrorHandler } from '@/composables/useErrorHandler.js';

// Enregistrer le plugin zoom
Chart.register(zoomPlugin);

export default {
    name: 'CoinChart',
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            CoinChart: { prices: [], market_caps: [], total_volumes: [], graph: null },
            historicalChart: { prices: [], graph: null },
            Value: 0,
            isLoading: false,
            selectedTimeRange: '7d',
            chartType: 'price',
            // Cache system to prevent data loss on errors
            cache: {
                chartData: {}, // { '7d': {...}, '1m': {...}, etc. }
                historicalData: null,
                historicalAttempted: false, // Track if we already tried loading historical data
            },
            // Prevent rapid clicking
            isChangingType: false,
            chartTypeDebounceTimer: null,
            isChangingTimeRange: false,
            timeRangeDebounceTimer: null,
            // Prevent infinite recovery loops
            isRecoveringChart: false,
            isRecoveringHistoricalChart: false,
            // Resize handling
            resizeTimeout: null,
        };
    },
    methods: {
        async retrieveCoinChartData(days = '7') {
            // Check cache first
            const cacheKey = `${this.id}_${days}`;
            if (this.cache.chartData[cacheKey]) {
                console.log('✨ Cache hit:', days, '- Instant load!');
                this.CoinChart = this.cache.chartData[cacheKey];
                this.$nextTick(() => {
                    setTimeout(() => {
                        if (this.$refs.chartCanvas && this.CoinChart.prices) {
                            this.generateChart();
                        }
                        if (this.$refs.historicalChartCanvas && this.cache.historicalData) {
                            this.historicalChart = this.cache.historicalData;
                            this.generateHistoricalChart();
                        }
                    }, 50);
                });
                return;
            }

            console.log('📊 Loading from API:', this.id, '-', days);

            this.isLoading = true;
            try {
                const data = await getCoinChartData(this.id, days);
                console.log('✅ API data received:', data.prices.length, 'points');

                // Store in cache
                this.cache.chartData[cacheKey] = { ...data };
                this.CoinChart = data;

                await this.retrieveSpecificCoinData();

                // Retrieve historical data for the overview chart
                // Only attempt once to avoid repeated API errors (saves API calls)
                if (!this.cache.historicalAttempted && !this.cache.historicalData && days !== 'max' && days !== '365') {
                    this.cache.historicalAttempted = true;
                    try {
                        console.log('📊 Attempting historical data (1 year range for overview)...');
                        // Try 1 year instead of 'max' - more likely to work with free API
                        const historicalData = await getCoinChartData(this.id, '365');
                        this.historicalChart.prices = historicalData.prices || [];
                        this.historicalChart.market_caps = historicalData.market_caps || [];
                        this.historicalChart.total_volumes = historicalData.total_volumes || [];

                        // Cache historical data
                        this.cache.historicalData = {
                            prices: this.historicalChart.prices,
                            market_caps: this.historicalChart.market_caps,
                            total_volumes: this.historicalChart.total_volumes
                        };

                        console.log('✅ Historical cached:', this.historicalChart.prices.length, 'points');
                    } catch (err) {
                        console.warn('⚠️ Historical data unavailable:', err.message || err);
                        // Ensure we don't try to render an empty chart
                        this.historicalChart.prices = [];
                        this.cache.historicalData = null;
                    }
                } else if (days === 'max') {
                    // If we're viewing max range, use the main data for historical chart
                    this.historicalChart.prices = data.prices || [];
                    this.cache.historicalData = { ...this.historicalChart };
                } else if (this.cache.historicalData) {
                    // Use cached historical data
                    this.historicalChart = { ...this.cache.historicalData };
                }
            } catch (error) {
                const { handleApiError, showErrorNotification } = useErrorHandler();
                const errorInfo = handleApiError(error, 'CoinChart');
                showErrorNotification(errorInfo.message);
                console.error('❌ Error loading chart data:', error);

                // On error, try to restore from cache if available
                if (this.cache.chartData[cacheKey]) {
                    console.log('🔄 Restoring from cache after error');
                    this.CoinChart = this.cache.chartData[cacheKey];
                }
            } finally {
                this.isLoading = false;
                this.$nextTick(() => {
                    setTimeout(() => {
                        if (this.$refs.chartCanvas && this.CoinChart.prices && this.CoinChart.prices.length > 0) {
                            this.generateChart();
                        } else {
                            console.error('❌ Cannot generate chart - Canvas:', !!this.$refs.chartCanvas, 'Data:', !!this.CoinChart.prices);
                        }
                        if (this.$refs.historicalChartCanvas && this.historicalChart.prices && this.historicalChart.prices.length > 0) {
                            this.generateHistoricalChart();
                        }
                    }, 100);
                });
            }
        },
        changeTimeRange(range) {
            // Prevent rapid clicking - debounce for 2 seconds
            if (this.isChangingTimeRange) {
                console.log('⏳ Please wait 2s before changing time range again');
                return;
            }

            // Same range, no need to change
            if (this.selectedTimeRange === range) {
                return;
            }

            console.log('📅 Changing time range to:', range);

            // Set flag to prevent rapid clicks
            this.isChangingTimeRange = true;

            // Clear any existing timer
            if (this.timeRangeDebounceTimer) {
                clearTimeout(this.timeRangeDebounceTimer);
            }

            this.selectedTimeRange = range;
            const daysMap = {
                '7d': '7',
                '1m': '30',
                '3m': '90'
            };

            // Destroy existing chart properly and wait before recreating
            this.destroyChart();

            // Small delay to ensure cleanup is complete
            setTimeout(() => {
                this.retrieveCoinChartData(daysMap[range]);

                // Re-enable after 2 seconds
                this.timeRangeDebounceTimer = setTimeout(() => {
                    this.isChangingTimeRange = false;
                    console.log('✅ Time range change ready');
                }, 2000);
            }, 50);
        },

        destroyChart() {
            // Safely destroy the main chart using Chart.js registry
            try {
                // First, destroy the instance we have reference to
                if (this.CoinChart.graph) {
                    this.CoinChart.graph.stop();
                    this.CoinChart.graph.destroy();
                    this.CoinChart.graph = null;
                }

                // Then, check if Chart.js has any instance attached to the canvas
                if (this.$refs.chartCanvas) {
                    const existingChart = Chart.getChart(this.$refs.chartCanvas);
                    if (existingChart) {
                        console.log('🧹 Found existing chart instance, destroying...');
                        existingChart.destroy();
                    }
                }
            } catch (error) {
                console.warn('⚠️ Error destroying chart:', error);
            }
        },

        destroyHistoricalChart() {
            // Safely destroy the historical chart using Chart.js registry
            try {
                // First, destroy the instance we have reference to
                if (this.historicalChart.graph) {
                    this.historicalChart.graph.stop();
                    this.historicalChart.graph.destroy();
                    this.historicalChart.graph = null;
                }

                // Then, check if Chart.js has any instance attached to the canvas
                if (this.$refs.historicalChartCanvas) {
                    const existingChart = Chart.getChart(this.$refs.historicalChartCanvas);
                    if (existingChart) {
                        console.log('🧹 Found existing historical chart instance, destroying...');
                        existingChart.destroy();
                    }
                }
            } catch (error) {
                console.warn('⚠️ Error destroying historical chart:', error);
            }
        },

        // Emergency recovery function - rebuild chart from scratch
        recoverChart(retryCount = 0) {
            // Prevent infinite recovery loops
            if (this.isRecoveringChart && retryCount === 0) {
                console.warn('⚠️ Chart recovery already in progress, skipping...');
                return;
            }

            // Max 3 attempts
            if (retryCount >= 3) {
                console.error('❌ Chart recovery failed after 3 attempts, giving up');
                this.isRecoveringChart = false;
                return;
            }

            this.isRecoveringChart = true;
            console.log('🔄 Attempting chart recovery... (attempt', retryCount + 1, ')');

            // Clear any existing chart instance
            this.destroyChart();

            // Wait for DOM cleanup
            this.$nextTick(() => {
                setTimeout(() => {
                    // Verify canvas exists
                    if (this.$refs.chartCanvas && this.CoinChart.prices && this.CoinChart.prices.length > 0) {
                        try {
                            console.log('✅ Canvas available, rebuilding chart...');
                            this.generateChart();
                            // Success - reset flag
                            this.isRecoveringChart = false;
                        } catch (error) {
                            console.error('❌ Recovery failed:', error);
                            // Retry with exponential backoff
                            const delay = Math.pow(2, retryCount) * 500; // 500ms, 1s, 2s
                            console.log(`⏳ Retrying in ${delay}ms...`);
                            setTimeout(() => this.recoverChart(retryCount + 1), delay);
                        }
                    } else {
                        console.warn('⚠️ Canvas or data not ready for recovery');
                        // Retry if we have attempts left
                        setTimeout(() => this.recoverChart(retryCount + 1), 1000);
                    }
                }, 200);
            });
        },

        // Recovery for historical chart
        recoverHistoricalChart(retryCount = 0) {
            // Prevent infinite recovery loops
            if (this.isRecoveringHistoricalChart && retryCount === 0) {
                console.warn('⚠️ Historical chart recovery already in progress, skipping...');
                return;
            }

            // Max 3 attempts
            if (retryCount >= 3) {
                console.error('❌ Historical chart recovery failed after 3 attempts, giving up');
                this.isRecoveringHistoricalChart = false;
                return;
            }

            this.isRecoveringHistoricalChart = true;
            console.log('🔄 Attempting historical chart recovery... (attempt', retryCount + 1, ')');

            this.destroyHistoricalChart();

            this.$nextTick(() => {
                setTimeout(() => {
                    if (this.$refs.historicalChartCanvas && this.historicalChart.prices && this.historicalChart.prices.length > 0) {
                        try {
                            console.log('✅ Historical canvas available, rebuilding...');
                            this.generateHistoricalChart();
                            // Success - reset flag
                            this.isRecoveringHistoricalChart = false;
                        } catch (error) {
                            console.error('❌ Historical recovery failed:', error);
                            setTimeout(() => this.recoverHistoricalChart(retryCount + 1), Math.pow(2, retryCount) * 500);
                        }
                    } else {
                        this.isRecoveringHistoricalChart = false;
                    }
                }, 200);
            });
        },

        // Resize charts when window resizes
        resizeCharts() {
            // Debounce resize to avoid too many calls
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout);
            }

            this.resizeTimeout = setTimeout(() => {
                try {
                    // Resize main chart
                    if (this.CoinChart.graph) {
                        console.log('📏 Resizing main chart...');
                        this.CoinChart.graph.resize();
                    }

                    // Resize historical chart
                    if (this.historicalChart.graph) {
                        console.log('📏 Resizing historical chart...');
                        this.historicalChart.graph.resize();
                    }
                } catch (error) {
                    console.warn('⚠️ Error resizing charts:', error);
                }
            }, 150); // Debounce for 150ms
        },
        async retrieveSpecificCoinData() {
            try {
                const data = await getSpecificCoinData(this.id);
                this.Value = data.market_data?.price_change_percentage_24h || 0;
            } catch (error) {
                const { handleApiError } = useErrorHandler();
                handleApiError(error, 'CoinChart - retrieveSpecificCoinData');
                this.Value = 0;
            }
        },
        changeChartType(type) {
            // Prevent rapid clicking - debounce for 2 seconds
            if (this.isChangingType) {
                console.log('⏳ Please wait 2s before changing chart type again');
                return;
            }

            // Same type, no need to change
            if (this.chartType === type) {
                return;
            }

            console.log('🔄 Changing chart type to:', type);

            // Set flag to prevent rapid clicks
            this.isChangingType = true;

            // Clear any existing timer
            if (this.chartTypeDebounceTimer) {
                clearTimeout(this.chartTypeDebounceTimer);
            }

            this.chartType = type;

            // Destroy the chart properly
            this.destroyChart();

            // Wait for DOM to update and recreate chart
            this.$nextTick(() => {
                setTimeout(() => {
                    if (this.$refs.chartCanvas && this.CoinChart.prices) {
                        this.generateChart();
                    }

                    // Re-enable after 2 seconds
                    this.chartTypeDebounceTimer = setTimeout(() => {
                        this.isChangingType = false;
                        console.log('✅ Chart type change ready');
                    }, 2000);
                }, 100);
            });
        },
        generateChart() {
            // Enhanced canvas availability check
            if (!this.$refs.chartCanvas) {
                console.warn('⚠️ Canvas not available, retrying...');
                setTimeout(() => this.generateChart(), 100);
                return;
            }

            // Verify canvas is in the DOM
            if (!this.$refs.chartCanvas.isConnected) {
                console.warn('⚠️ Canvas not connected to DOM');
                return;
            }

            try {
                let color;
                let colorsecond;
                if (this.Value) {
                    if (this.Value > 0) {
                        color = 'rgba(0,255,0,';
                        colorsecond = 'rgb(0,255,0)';
                    } else {
                        color = 'rgba(255,0,0,';
                        colorsecond = 'rgb(255,0,0)';
                    }
                } else {
                    color = 'rgba(255,255,255,';
                    colorsecond = 'rgb(102,102,102)';
                }

                // Prepare data from API response based on chart type
                let dataSource = [];
                if (this.chartType === 'marketcap') {
                    dataSource = this.CoinChart.market_caps || [];
                } else {
                    dataSource = this.CoinChart.prices || [];
                }

                if (dataSource.length === 0) {
                    console.error('❌ No data to display in chart');
                    return;
                }

                console.log('📈 Rendering:', this.chartType, '-', dataSource.length, 'points');

                const labels = dataSource.map(p => {
                    const date = new Date(p[0]);
                    if (this.selectedTimeRange === '24h') {
                        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                    } else if (this.selectedTimeRange === '7d') {
                        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                    } else {
                        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                    }
                });
                const data = dataSource.map(p => p[1]);

                // Destroy existing chart BEFORE getting context
                this.destroyChart();

                // Safe context retrieval with error handling
                let context;
                try {
                    context = this.$refs.chartCanvas.getContext('2d');
                } catch (error) {
                    console.error('❌ Error getting canvas context:', error);
                    if (!this.isRecoveringChart) {
                        console.log('🔧 Triggering chart recovery...');
                        this.recoverChart();
                    }
                    return;
                }

                if (!context) {
                    console.warn('⚠️ Canvas context not available');
                    if (!this.isRecoveringChart) {
                        this.recoverChart();
                    }
                    return;
                }

                // Create new chart
                const chartLabel = this.chartType === 'marketcap' ? 'Market Cap' : 'Price';

                this.CoinChart.graph = new Chart(context, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: chartLabel,
                                data: data,
                                borderColor: color + "1)",
                                borderWidth: 2,
                                fill: true,
                                backgroundColor: (context) => {
                                    const chart = context.chart;
                                    if (chart && chart.ctx && chart.chartArea) {
                                        const { ctx, chartArea } = chart;
                                        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                                        gradient.addColorStop(0, color + "0)");
                                        gradient.addColorStop(1, color + "0.5)");
                                        return gradient;
                                    }
                                    return color + "0.2)";
                                },
                                pointBackgroundColor: colorsecond,
                                pointRadius: 0,
                                pointHoverRadius: 5,
                                tension: 0.1,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            intersect: false,
                            mode: 'index',
                        },
                        scales: {
                            x: {
                                type: 'category',
                                ticks: {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    maxTicksLimit: 10,
                                    autoSkip: true,
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.05)',
                                    borderColor: 'transparent',
                                },
                            },
                            y: {
                                type: 'linear',
                                position: 'right',
                                ticks: {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    callback: function (value) {
                                        if (value >= 1000000) {
                                            return '$' + (value / 1000000).toFixed(1) + 'M';
                                        } else if (value >= 1000) {
                                            return '$' + (value / 1000).toFixed(1) + 'K';
                                        }
                                        return '$' + value.toLocaleString();
                                    },
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.1)',
                                },
                            },
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                titleColor: 'white',
                                bodyColor: 'white',
                                borderColor: color + "1)",
                                borderWidth: 1,
                                callbacks: {
                                    label: function (context) {
                                        return chartLabel + ': $' + context.parsed.y.toLocaleString();
                                    }
                                }
                            },
                            zoom: {
                                zoom: {
                                    wheel: {
                                        enabled: true,
                                    },
                                    pinch: {
                                        enabled: true
                                    },
                                    mode: 'x',
                                },
                                pan: {
                                    enabled: true,
                                    mode: 'x',
                                }
                            }
                        },
                    },
                });
                console.log('✅ Chart ready');
            } catch (error) {
                console.error('❌ Critical error in generateChart:', error);

                // Only attempt recovery if we're not already recovering
                if (!this.isRecoveringChart) {
                    console.log('🔧 Initiating automatic recovery...');
                    this.recoverChart();
                } else {
                    console.warn('⚠️ Already recovering, skipping additional recovery attempt');
                }
            }
        },
        generateHistoricalChart() {
            if (!this.$refs.historicalChartCanvas) {
                console.warn('⚠️ Historical canvas ref not available');
                return;
            }

            // Verify canvas is in the DOM
            if (!this.$refs.historicalChartCanvas.isConnected) {
                console.warn('⚠️ Historical canvas not connected to DOM');
                return;
            }

            if (!this.historicalChart.prices || this.historicalChart.prices.length === 0) {
                console.warn('⚠️ No historical data to render');
                return;
            }

            try {
                const prices = this.historicalChart.prices;
                console.log('📊 Generating historical chart:', prices.length, 'points');

                // Sample data for better performance (take only one point per month)
                const sampledPrices = prices.filter((_, index) => index % 30 === 0);

                const labels = sampledPrices.map(p => {
                    const date = new Date(p[0]);
                    return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
                });
                const data = sampledPrices.map(p => p[1]);

                // Destroy existing chart BEFORE getting context
                this.destroyHistoricalChart();

                // Safe context retrieval with error handling
                let context;
                try {
                    context = this.$refs.historicalChartCanvas.getContext('2d');
                } catch (error) {
                    console.error('❌ Error getting historical canvas context:', error);
                    if (!this.isRecoveringHistoricalChart) {
                        console.log('🔧 Triggering historical chart recovery...');
                        this.recoverHistoricalChart();
                    }
                    return;
                }

                if (!context) {
                    console.warn('⚠️ Cannot get historical canvas context');
                    if (!this.isRecoveringHistoricalChart) {
                        this.recoverHistoricalChart();
                    }
                    return;
                }

                // Create historical overview chart
                this.historicalChart.graph = new Chart(context, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Historical Price',
                                data: data,
                                borderColor: 'rgba(100, 150, 255, 1)',
                                borderWidth: 1.5,
                                fill: true,
                                backgroundColor: (context) => {
                                    const chart = context.chart;
                                    if (chart && chart.ctx && chart.chartArea) {
                                        const { ctx, chartArea } = chart;
                                        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                                        gradient.addColorStop(0, 'rgba(100, 150, 255, 0)');
                                        gradient.addColorStop(1, 'rgba(100, 150, 255, 0.3)');
                                        return gradient;
                                    }
                                    return 'rgba(100, 150, 255, 0.2)';
                                },
                                pointRadius: 0,
                                tension: 0.2,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            intersect: false,
                            mode: 'index',
                        },
                        scales: {
                            x: {
                                ticks: {
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    maxTicksLimit: 6,
                                    autoSkip: true,
                                },
                                grid: {
                                    display: false,
                                },
                            },
                            y: {
                                ticks: {
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    callback: function (value) {
                                        if (value >= 1000000) {
                                            return '$' + (value / 1000000).toFixed(0) + 'M';
                                        } else if (value >= 1000) {
                                            return '$' + (value / 1000).toFixed(0) + 'K';
                                        }
                                        return '$' + value;
                                    },
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.05)',
                                },
                            },
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                enabled: false
                            }
                        },
                    },
                });
                console.log('✅ Historical chart rendered successfully');
            } catch (error) {
                console.error('❌ Critical error in generateHistoricalChart:', error);

                // Only attempt recovery if we're not already recovering
                if (!this.isRecoveringHistoricalChart) {
                    console.log('🔧 Initiating automatic recovery for historical chart...');
                    this.recoverHistoricalChart();
                } else {
                    console.warn('⚠️ Already recovering historical chart, skipping additional recovery attempt');
                }
            }
        },

    },
    created() {
        this.retrieveCoinChartData();

    },

    watch: {
        id() {
            console.log('🔄 Coin ID changed to:', this.id);

            // Reset recovery flags
            this.isRecoveringChart = false;
            this.isRecoveringHistoricalChart = false;

            // Destroy main chart
            this.destroyChart();

            // Destroy historical chart
            this.destroyHistoricalChart();

            // Reset cache for new coin
            this.cache = {
                chartData: {},
                historicalData: null,
                historicalAttempted: false,
            };

            // Reset historical data
            this.historicalChart.prices = [];

            // Reset to default time range
            this.selectedTimeRange = '7d';

            this.retrieveCoinChartData();
        },
    },
    mounted() {
        // S'assurer que le graphique est généré après le montage si les données sont déjà chargées
        if (this.CoinChart && this.CoinChart.prices && !this.isLoading && this.$refs.chartCanvas) {
            this.$nextTick(() => {
                setTimeout(() => {
                    if (this.$refs.chartCanvas && !this.CoinChart.graph) {
                        this.generateChart();
                    }
                }, 100);
            });
        }

        // Add global error handler for Chart.js errors
        this.chartErrorHandler = (event) => {
            if (event.error && event.error.message &&
                (event.error.message.includes('getContext') ||
                    event.error.message.includes('clearCanvas') ||
                    event.error.message.includes('canvas'))) {
                console.error('🚨 Captured Chart.js canvas error:', event.error);
                console.log('🔧 Attempting automatic recovery...');
                event.preventDefault(); // Prevent error from propagating

                // Determine which chart failed and recover
                if (event.error.stack && event.error.stack.includes('historical')) {
                    this.recoverHistoricalChart();
                } else {
                    this.recoverChart();
                }
            }
        };

        window.addEventListener('error', this.chartErrorHandler);

        // Add resize handler for responsive charts
        this.resizeHandler = () => {
            this.resizeCharts();
        };
        window.addEventListener('resize', this.resizeHandler);
    },

    beforeUnmount() {
        // Remove global error handler
        if (this.chartErrorHandler) {
            window.removeEventListener('error', this.chartErrorHandler);
        }

        // Remove resize handler
        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }

        // Clear any pending resize timeout
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }

        // Reset recovery flags
        this.isRecoveringChart = false;
        this.isRecoveringHistoricalChart = false;

        // Cleanup timers to prevent memory leaks
        if (this.chartTypeDebounceTimer) {
            clearTimeout(this.chartTypeDebounceTimer);
        }
        if (this.timeRangeDebounceTimer) {
            clearTimeout(this.timeRangeDebounceTimer);
        }

        // Destroy charts
        this.destroyChart();
        this.destroyHistoricalChart();
    },

};
</script>