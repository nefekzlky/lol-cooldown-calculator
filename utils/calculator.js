/**
 * Calculates the new cooldown based on the original cooldown and ability haste.
 * Formula: Base Cooldown * (100 / (100 + Ability Haste))
 *
 * @param {number|string} originalCooldown - The base cooldown of the ability.
 * @param {number|string} abilityHaste - The total ability haste of the champion.
 * @returns {number} The calculated new cooldown, rounded to one decimal place.
 */
function calculateNewCooldown(originalCooldown, abilityHaste) {
    const baseCooldown = parseFloat(originalCooldown);
    const haste = parseFloat(abilityHaste) || 0;

    if (isNaN(baseCooldown)) {
        return 0;
    }

    const newCooldown = baseCooldown * (100 / (100 + haste));

    // Return the result rounded to 1 decimal place (e.g., 6.4)
    return Math.round(newCooldown * 10) / 10;
}

module.exports = {
    calculateNewCooldown
};