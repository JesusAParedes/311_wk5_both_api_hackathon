const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();
const employeesRoute = require("./employees.js");

//Default Route
router.get("/", employeesRoute);
//GET all employees
router.get("/employees", employeesRoute);
//GET employees by ID
router.get("/employees/:id", employeesRoute);
//GET employees by First Name
router.get("/employees/:fname", employeesRoute);
//POST addEmployee
router.post("/", employeesRoute);
//POST salary
router.post("/salaries/add", salariesRoute);

module.exports = router;
