const express = require('express')
const app = express()
const dbconfig = require('./config/config.js')
var mysql = require('mysql');

app.use(express.json())

app.get("/", (req, res) => {
    console.log("server called");
    res.send("hello");
})

app.get("/experience/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM experience_detail WHERE user_account_id = " + id;
    con.query(query, function(err, result) {
        if (err) throw err
        res.json({
            data: result
        });
        console.log(query)
        console.log(result)
    });
})

app.get("/education/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM education_detail WHERE user_account_id = " + id;
    con.query(query, function(err, result){
        if (err) throw err
        res.json({
            data: result
        });
        console.log(query)
        console.log(result)
    })
})


app.get("/profile/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM seeker_profile WHERE user_account_id = " + id;
    con.query(query, function(err, result){
        if (err) throw err
        res.json({
            data: result
        });
        console.log(query)
        console.log(result)
    })
})


app.get("/skill/list/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM seeker_skill_set WHERE user_account_id = " + id;
    con.query(query, function(err, result){
        if (err) throw err
        res.json({
            data: result
        });
        console.log(query)
        console.log(result)
    })
})


app.post("/skill/add", (req, res) => {
    const id  = req.body.id
    const skill_name = req.body.skill_name
    query = "INSERT INTO seeker_skill_set VALUES (" + id + ", '" + skill_name + "')"
    con.query(query, function(err, result){
        if (err) throw err
        console.log(query)
        console.log("inserted 1 row into seeker_skill_set")
        res.send("inserted 1 row into seeker_skill_set")
    })
                
})

app.get("/skill/names", (req, res) => {
    const query = "SELECT DISTINCT skill_name FROM seeker_skill_set ORDER BY skill_name"
    con.query(query, (err, result) => {
        res.json({
            data: result
        })
        console.log(query)
        console.log(result)
    })
})

app.post("/skill/delete", (req, res) => {
    const id = req.body.id
    const skill_name = req.body.skill_name
    const query = "DELETE FROM seeker_skill_set WHERE user_account_id = " + id + " AND skill_name = '" + skill_name + "'"
    con.query(query, (err, result) => {
        if (err) throw err
        res.status(200).send("deleted 1 row from seeker_skill_set")
    })
})


var con = mysql.createConnection(dbconfig);

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(3001)