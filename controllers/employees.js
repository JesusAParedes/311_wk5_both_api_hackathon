const mysql = require('mysql');
const pool = require('../mysql/connection');
const { errorOccurred } = require('../mysql/error');

const defaultRoute = (req,res) => {
    res.send('Welcome to our API');
}

const getEmployees = (req, res) => {
    pool.query("", (err, rows) => {
        if (err) return errorOccurred(res, err)
        return res.json(rows);
    })
};

const getEmployeesById = (req, res) => {
    res.send('getting employees...')
};

const getEmployeesByFirstName = (req,res) => {

}

module.exports = {
    defaultRoute,
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName
}

