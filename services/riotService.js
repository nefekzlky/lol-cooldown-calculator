const axios = require('axios');

// En güncel yamayı hafızada tutmak için (Her seferinde Riot'u yormamak adına)
let cachedVersion = null;

/**
 * Fetches the latest patch version from Riot's API (e.g., '14.6.1').
 */
async function getLatestVersion() {
    if (cachedVersion) return cachedVersion; // Hafızada varsa direkt onu kullan
    
    try {
        const response = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
        cachedVersion = response.data[0]; // Dizideki ilk eleman her zaman en güncel yamadır
        return cachedVersion;
    } catch (error) {
        console.error("Error fetching patch version:", error.message);
        return '14.5.1'; // Hata olursa sitenin çökmemesi için yedek yama
    }
}

/**
 * Constructs the base URL for Riot Data Dragon dynamically based on the latest patch.
 */
async function getBaseUrl(lang) {
    const version = await getLatestVersion();
    const riotLang = lang === 'en' ? 'en_US' : 'tr_TR';
    return `https://ddragon.leagueoflegends.com/cdn/${version}/data/${riotLang}`;
}

/**
 * Fetches the brief list of all champions.
 */
async function getChampions(lang = 'tr') {
    try {
        const baseUrl = await getBaseUrl(lang);
        const response = await axios.get(`${baseUrl}/champion.json`);
        return Object.values(response.data.data);
    } catch (error) {
        console.error("Error fetching champions data:", error.message);
        return [];
    }
}

/**
 * Fetches detailed data (including spells) for a specific champion.
 */
async function getChampionDetails(championId, lang = 'tr') {
    try {
        const baseUrl = await getBaseUrl(lang);
        const response = await axios.get(`${baseUrl}/champion/${championId}.json`);
        return response.data.data[championId];
    } catch (error) {
        console.error(`Error fetching details for ${championId}:`, error.message);
        return null;
    }
}

module.exports = {
    getChampions,
    getChampionDetails
};
