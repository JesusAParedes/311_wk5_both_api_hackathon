const express = require('express');
const employeesController = require('../controllers/employees');
const router = express.Router();

router.get('/', employeesController.getEmployees);

router.get('/:id', employeesController.getEmployeesById);

module.exports = router;
