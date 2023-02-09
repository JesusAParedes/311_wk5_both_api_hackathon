const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()
const employeesRoute = require('./employees.js')
const salariesRoute = require('./salaries.js')

const departmentsRoute = require('./departments.js')


    //Default Route
router.get('/', employeesRoute)
    //GET all employees
router.get('/employees', employeesRoute)
    //GET employees by ID
router.get('/employees/:id', employeesRoute)
    //GET employees by First Name
router.get('/employees/:fname', employeesRoute)
    // Delete employee by Id
router.delete('/employees/:id', employeesRoute)
    // Delete department by employee id
router.delete('/departments/:dept_no', departmentsRoute)
    // Update employee
router.put('/employees', employeesRoute)
    //POST salary
router.post('/salaries/add', salariesRoute);

router.put('/salaries/update', salariesRoute);

router.get('/salaries', salariesRoute)

router.get('/salaries/:id', salariesRoute)

//Update Department
router.put('/department/:id', departmentRoute);

module.exports = router;
