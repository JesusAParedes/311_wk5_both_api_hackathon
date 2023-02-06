const express = require('express');
const employeesController = require('../controllers/employees');
const router = express.Router();
//Default Route
router.get('/', employeesController.defaultRoute)
//GET all employees
router.get('/employees', employeesController.getEmployees)
//GET employees by ID
router.get('/employees/:id', employeesController.getEmployeesById)
//GET employees by First Name
router.get('/employees/:fname', employeesController.getEmployeesByFirstName)
// Delete employees by id
router.delete("/employees/:id", employeesController.deleteEmployeeById);
//Update Employee
router.put("/employees/id", employeesController.updateEmployee);
module.exports = router;
