const mysql = require("mysql2");
const pool = require("../mysql/connection");
const { errorOccurred } = require("../mysql/error");

const defaultRoute = (req, res) => {
  res.send("Welcome to our API");localStorage
};

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees limit 50", (err, rows) => {
    if (err) return errorOccurred(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = (req, res) => {
  res.send("getting employees...");
};

const getEmployeesByFirstName = (req, res) => {};


const addEmployee = (req, res) => {
  const { first_name, last_name } = req.body;
  let sql = `INSERT INTO employees (first_name, last_name) VALUES('${first_name}', '${last_name}')`;
  sql = mysql.format(sql, [req.body.first_name, req.body.last_name]);

  pool.query(sql, (err, results) => {
    if (err) return errorOccurred(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = {
  defaultRoute,
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName,
};
