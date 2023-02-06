const express = require('express');
const salariesController = require('../controllers/salaries.js');
const router = express.Router();

router.get('/', salariesController.defaultRoute);

router.get('/salaries', salariesController.getAllSalaries);

router.get('/salaries/:id', salariesController.getSalaryByEmployeeId);

router.post('/salaries/add', salariesController.addSalaries);

router.put('/salaries/update', salariesController.updateSalary)

module.exports = router;