const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { errorOccurred } = require('../mysql/error');

const defaultRoute = (req,res) => {
    res.send('Welcome to our API');
}

module.exports = {
    defaultRoute
}