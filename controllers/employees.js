const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { errorOccurred } = require('../mysql/error');

const defaultRoute = (req,res) => {
    res.send('Welcome to our API');
}

const getEmployees = (req, res) => {
    pool.query("SELECT * FROM employees limit 50", (err, rows) => {
        if (err) return errorOccurred(res, err)
        return res.json(rows);
    })
};

const getEmployeesById = (req, res) => {
    //sql statement
    let sql = "select * from ?? where ?? = ?";
    //variables that replace question marks in statement.
    let rep = ['employees', 'emp_no', req.params.id];
    //.format which places the variables in the sql statement
    sql = mysql.format(sql,rep);
    //query that runs to grab based off the req.params.id i.e. the emp_no the person looks for
    pool.query(sql, (err, rows) => {
        if (err) return errorOccurred(res, err)
        return res.json(rows);
    })
};

const getEmployeesByFirstName = (req,res) => {

}

module.exports = {
    defaultRoute,
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName
}

