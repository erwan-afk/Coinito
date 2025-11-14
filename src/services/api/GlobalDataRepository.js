import { apiClient } from './apiClient.js';

export async function getGlobalData() {
    return apiClient.get('/global');
}
