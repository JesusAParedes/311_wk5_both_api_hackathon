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
//PUT employee , Adding employee
router.post('/', employeesController.addEmployee)
// Delete employees by id
router.delete("/employees/:id", employeesController.deleteEmployeeById);
// delete Department by employee Id
router.delete("/employees/:id/departments",employeesController.deleteDepartmentByEmployeeId);

module.exports = router;
