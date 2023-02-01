const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getAllEmployees = (req, res) => {
    pool.query("SELECT * FROM employees", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    } )
}


module.exports = {getAllEmployees}