const express = require('express');
const salariesController = require('../controllers/salaries.js');
const router = express.Router();

router.get('/', salariesController.defaultRoute)

module.exports = router;