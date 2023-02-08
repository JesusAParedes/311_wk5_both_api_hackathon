const express = require('express');
const { departmentsController } = require('../controllers/departments');
const router = express.Router();
//Default Route
router.get('/', departmentsController.defaultRoute)
//GET all departments
router.get('/employees', departmentsController.getAllDepartments)
// addDepartment
router.post('/' , departmentsController.addDepartment)

// router.delete("/employees/:id", employeesController.deleteEmployeeById);
// // delete Department by employee Id
// router.delete("/employees/:id/departments",employeesController.deleteDepartmentByEmployeeId);


module.exports = router;
