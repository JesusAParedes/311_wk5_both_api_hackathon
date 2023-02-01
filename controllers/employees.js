const mysql = require('mysql');
const pool = require('../mysql/connection');
const { errorOccurred } = require('../mysql/error');

const getEmployees = (req, res) => {
    pool.query("", (err, rows) => {
        if (err) return errorOccurred(res, err)
        return res.json(rows);
    })
};

const getEmployeesById = (req, res) => {
    res.send('getting employees...')
};

module.exports = {getEmployees, getEmployeesById}