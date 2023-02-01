const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getEmployees = (req, res) => {
    mysql.query("SELECT * FROM employees", (rows) => {
        return res.json(rows);
    } )
}


module.exports = {getEmployees}