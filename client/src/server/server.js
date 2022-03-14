const express = require('express')
const app = express()
var mysql = require('mysql');

app.use(express.json())

app.get("/", (req, res) => {
    console.log("server called")
})

var con = mysql.createConnection({
  host: "job-finder-db.cyljkfko1xny.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "masterROOTadmin160",
  database: "job_finder"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(3000)