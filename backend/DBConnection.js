const dbconfig = require("./config/config.js")
const mysql = require('mysql')

var mysqlConnection = mysql.createConnection(dbconfig);
mysqlConnection.connect((err) => {
    if (err) {
        console.log("connection failed");
    }
    else {
        console.log("Connected!");
    }
});

module.exports = mysqlConnection;