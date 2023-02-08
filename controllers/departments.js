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

const updateDepartment = (req, res) => {
  //sql statement
  let sql = "UPDATE dept_emp JOIN departments ON dept_emp.dept_no = departments.dept_no JOIN employees ON employees.emp_no = dept_emp.emp_no SET dept_emp.dept_no = ? WHERE dept_emp.emp_no = ? ";
  //replacement values for question marks
  let rep = [req.body.dept_no, req.params.id];
  //equation to format sql statement with values
  sql = mysql.format(sql,rep);
  //query to update salary based off client's input
  pool.query(sql, (err, department) => {
      if (err) return errorOccurred(res, err)
      res.send("Employee's Department updated");
  })
};


  module.exports = {
    defaultRoute,
    getAllDepartments,
    deleteDepartmentById
    updateDepartment
  };
  