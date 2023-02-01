const mysql = require('mysql');
const pool = require('../mysql/connection');
const { errorOccurred } = require('../mysql/error');

const getEmployees = (req, res) => {
    res.send('getting employees...')
};

const getEmployeesById = (req, res) => {
    res.send('getting employees...')
};

module.exports = {getEmployees, getEmployeesById}