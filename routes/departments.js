const express = require('express');

const departmentsController = require('../controllers/departments.js');
const router = express.Router();

//Default Route
router.get('/', departmentsController.defaultRoute)
//GET all departments

router.get('/departments', departmentsController.getAllDepartments)
// Delete departments by ID
router.delete("/departments/:dept_no", departmentsController.deleteDepartmentById);

router.get('/employees', departmentsController.getAllDepartments)


router.put('/department/:id', departmentsController.updateDepartment);

// router.delete("/employees/:id", employeesController.deleteEmployeeById);
// // delete Department by employee Id
// router.delete("/employees/:id/departments",employeesController.deleteDepartmentByEmployeeId);



module.exports = router;
