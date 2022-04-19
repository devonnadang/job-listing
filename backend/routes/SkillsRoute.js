const express = require('express');
const router = express.Router();
const con = require('../DBConnection')

router.get("/list/:id", (req, res) => {
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


router.post("/add", (req, res) => {
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

router.get("/names", (req, res) => {
    const query = "SELECT DISTINCT skill_name FROM seeker_skill_set ORDER BY skill_name"
    con.query(query, (err, result) => {
        res.json({
            data: result
        })
        console.log(query)
        console.log(result)
    })
})

router.post("/delete", (req, res) => {
    const id = req.body.id
    const skill_name = req.body.skill_name
    const query = "DELETE FROM seeker_skill_set WHERE user_account_id = " + id + " AND skill_name = '" + skill_name + "'"
    console.log(query)
    con.query(query, (err, result) => {
        if (err) throw err
        res.status(200).send("deleted 1 row from seeker_skill_set")
    })
})


module.exports = router;