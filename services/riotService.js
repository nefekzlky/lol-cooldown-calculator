const axios = require('axios');

// Using a fixed Data Dragon version. Consider fetching the latest version dynamically in future iterations.
const VERSION = '14.5.1'; 

/**
 * Constructs the base URL for Riot Data Dragon based on the selected language.
 * * @param {string} lang - The application's current language ('tr' or 'en').
 * @returns {string} The formatted Data Dragon base URL.
 */
function getBaseUrl(lang) {
    const riotLang = lang === 'en' ? 'en_US' : 'tr_TR';
    return `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${riotLang}`;
}

/**
 * Fetches the brief list of all champions.
 * * @param {string} [lang='tr'] - The language parameter.
 * @returns {Promise<Array>} Array of champion objects or an empty array if the request fails.
 */
async function getChampions(lang = 'tr') {
    try {
        const response = await axios.get(`${getBaseUrl(lang)}/champion.json`);
        return Object.values(response.data.data);
    } catch (error) {
        console.error("Error fetching champions data:", error.message);
        return [];
    }
}

/**
 * Fetches detailed data (including spells) for a specific champion.
 * * @param {string} championId - The unique ID of the champion (e.g., 'Aatrox').
 * @param {string} [lang='tr'] - The language parameter.
 * @returns {Promise<Object|null>} The champion detail object or null if the request fails.
 */
async function getChampionDetails(championId, lang = 'tr') {
    try {
        const response = await axios.get(`${getBaseUrl(lang)}/champion/${championId}.json`);
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