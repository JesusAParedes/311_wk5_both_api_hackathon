const express = require('express');
const app = express();
const employeesRouter = require('./routes/employees');


app.use('/employees', employeesRouter);

app.get('/', (req,res) => {
    res.send('Welcome to our API')
})

app.listen('4001', () => {
    console.log('Listening on port 4001')
})