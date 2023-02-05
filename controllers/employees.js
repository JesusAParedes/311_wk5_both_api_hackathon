// Add updateEmployee controller method
const updateEmployee = (req, res) => {
    let sql = "UPDATE employees SET first_name = ?, last_name = ? WHERE ?? = ?";
    let rep = [" ", " ", "emp_no", req.params.id];
    sql = mysql.format(sql, rep);
  
    pool.query(sql, (err, result) => {
      if (err) return errorOccurred(res, err);
      res.json(result);
    });
  };