const mysql = require('mysql');
require('dotenv').config();

class Connection {
    constructor() {
        if (!this.pool) {
            console.log('creating connection...')
            this.pool = mysql.createPool({
                connectionLimit: ,
                host: process.env.HOST,
                user: process.env.USERNAME,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                multipleStatements: true
            })
            return this.pool
        }
        return this.pool
    }
}
const instance = new Connection();

module.exports = instance;