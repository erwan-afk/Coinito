import { apiClient } from './apiClient.js';

export async function getCoinChartData(id, days = '7') {
    return apiClient.get(`/coins/${id}/market_chart`, {
        vs_currency: 'usd',
        days: days,
    });
}
