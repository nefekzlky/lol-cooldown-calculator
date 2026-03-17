const express = require('express');
const router = express.Router();
const championController = require('../controllers/championController');

// GET: Render the home page with the list of champions
router.get('/', championController.getHomePage);

// GET: Calculate cooldowns and render the results dashboard
router.get('/calculate', championController.calculateCooldowns);

module.exports = router;