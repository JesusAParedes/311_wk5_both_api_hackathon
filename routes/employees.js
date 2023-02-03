const express = require('express')
const router = express.Router();
//Employees Controller File
const employeesController = require('../controllers/employees.js')

    //Default Route
router.get('/', employeesController.defaultRoute)
    //GET all employees
router.get('/employees', employeesController.getEmployees)
    //GET employees by ID
router.get('/employees/:id', employeesController.getEmployeesById)
    //GET employees by First Name
router.get('/employees/:fname', employeesController.getEmployeesByFirstName)

module.exports = router;
