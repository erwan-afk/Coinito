import { apiClient } from './apiClient.js';

/**
 * Get detailed coin data for dashboard
 * @param {string} coinId - The coin ID (e.g., 'bitcoin')
 * @returns {Promise<Object>} Complete coin data
 */
export async function getCoinDashboardData(coinId) {
    return apiClient.get(`/coins/${coinId}`, {
        localization: false,
        tickers: true,
        market_data: true,
        community_data: true,
        developer_data: true,
        sparkline: false
    });
}

