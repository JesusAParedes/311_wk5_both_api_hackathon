const express = require('express');
const departmentsController = require('../controllers/departments.js');
const router = express.Router();
//Default Route
router.get('/', departmentsController.defaultRoute)
//GET all departments
router.get('/departments', departmentsController.getAllDepartments)
// Delete departments by ID
router.delete("/departments/:dept_no", departmentsController.deleteDepartmentById);

module.exports = router;
