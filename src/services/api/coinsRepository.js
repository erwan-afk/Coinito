import { apiClient } from './apiClient.js';

export async function getCoinsData() {
    return apiClient.get('/coins/markets', {
        vs_currency: 'eur',
        order: 'market_cap_desc',
        per_page: '250',
        page: '1',
        sparkline: 'false',
        locale: 'en',
        precision: '2',
    });
}
