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
};

const updateSalary = (req, res) => {
    //sql statement
    let sql = "UPDATE salaries SET salary = ? WHERE emp_no = ? AND from_date = ? AND to_date = ?"; 
    //replacement values for question marks
    let rep = [req.body.salary, req.body.emp_no, req.body.from_date, req.body.to_date];
    //equation to format sql statement with values
    sql = mysql.format(sql,rep);
    //query to update salary based off client's input
    pool.query(sql, (err, salary) => {
        if (err) return errorOccurred(res, err)
        res.send("Salary updated");
    })
};

module.exports = {
    defaultRoute,
    addSalaries,
    updateSalary
}