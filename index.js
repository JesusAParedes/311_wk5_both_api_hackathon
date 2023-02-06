const express = require('express');
const app = express();
//Import Route Folder
const routes = require('./routes')
//Our body parser
app.use(express.json())
//Use Route Folder
app.use(routes)

app.listen('4001', () => {
    console.log('Listening on port 4001')
})
