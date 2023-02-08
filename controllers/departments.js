const mysql = require("mysql2");
const pool = require("../mysql/connection");
const { errorOccurred } = require("../mysql/error");

const defaultRoute = (req, res) => {
  res.send("Welcome to our API");
};

const getAllDepartments = (req, res) => {
  pool.query("SELECT * FROM `employees`.`departments`", (err, rows) => {
    if (err) return errorOccurred(res, err);
    return res.json(rows);
  });
};

const addDepartment = (req, res) => {
  pool.query(
    {
      sql: "INSERT INTO departments (dept_no, , dept_name) VALUE (?, ?);",
      values: [req.params.dept_no, req.params.dept_name],
    },
    (err) => {
      if (err) return errorOccurred(res, err);
      res.send("Department Added");
    }
  );
};

module.exports = {
  defaultRoute,
  getAllDepartments,
  addDepartment,
};
