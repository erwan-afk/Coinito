import { apiClient } from './apiClient.js';

export async function getSpecificCoinData(id) {
    return apiClient.get(`/coins/${id}`);
}



