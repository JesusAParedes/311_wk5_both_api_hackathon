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

const deleteDepartmentById = (req, res) => {
  let sql = "DELETE FROM ?? WHERE ?? = ?";
  let rep = ['departments', 'dept_no', req.params.dept_no];
  sql = mysql.format(sql,rep);

  pool.query(sql, (err, rows) => {
    if(err) return errorOccurred(res, err)
      res.send('Department deleted!');
  })
};

  module.exports = {
    defaultRoute,
    getAllDepartments,
    deleteDepartmentById
  };
  