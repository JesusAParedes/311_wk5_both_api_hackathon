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






  module.exports = {
    defaultRoute,
    getAllDepartments
  };
  