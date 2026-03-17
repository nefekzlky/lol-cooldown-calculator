const riotService = require('../services/riotService');
const calculator = require('../utils/calculator');

/**
 * Renders the home page with all available champions
 * Champions are fetched based on user's language preference
 */
exports.getHomePage = async (req, res) => {
    const lang = req.getLocale();
    const champions = await riotService.getChampions(lang);
    res.render('index', { champions: champions });
};

/**
 * Calculates and displays cooldown reductions based on Ability Haste values
 * Supports multiple champion selections with individual haste values
 */
exports.calculateCooldowns = async (req, res) => {
    if (!req.query.champions) {
        return res.redirect('/');
    }

    const lang = req.getLocale();
    let selectedChampions = req.query.champions;
    
    if (!Array.isArray(selectedChampions)) {
        selectedChampions = [selectedChampions];
    }

    const results = [];

    for (const champId of selectedChampions) {
        const haste = req.query[`haste_${champId}`] || 0;
        const champData = await riotService.getChampionDetails(champId, lang);

        if (champData) {
            // Map spell cooldowns with calculated reductions based on haste
            const spells = champData.spells.map(spell => {
                return {
                    name: spell.name,
                    id: spell.id,
                    image: `https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${spell.image.full}`,
                    originalCooldowns: spell.cooldown,
                    newCooldowns: spell.cooldown.map(cd => calculator.calculateNewCooldown(cd, haste))
                };
            });

            results.push({
                id: champData.id,
                name: champData.name,
                champImage: `https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${champData.id}.png`,
                haste: haste,
                spells: spells
            });
        }
    }

    res.render('results', { results: results });
};