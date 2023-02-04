const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { errorOccurred } = require('../mysql/error');

const defaultRoute = (req,res) => {
    res.send('Welcome to our API');
}

const addSalaries = (req, res) => {
    pool.query({
        sql: "INSERT INTO salaries (emp_no, salary, from_date, to_date) VALUE (?, ?, ?, ?);",
        values: [req.body.emp_no, req.body.salary, req.body.from_date, req.body.to_date]},
    (err) => {
        if (err) return errorOccurred(res, err)
        res.send("Salary added");
    })
}

module.exports = {
    defaultRoute,
    addSalaries
}