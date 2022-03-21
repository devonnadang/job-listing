const express = require('express')
const app = express()
const dbconfig = require('../config/config.js')
var mysql = require('mysql');

app.use(express.json())

app.get("/", (req, res) => {
    console.log("server called")
})

var con = mysql.createConnection(dbconfig);

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(3000)