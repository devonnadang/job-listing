const express = require('express');
const router = express.Router();
const con = require('../DBConnection')

router.get("/list/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM education_detail WHERE user_account_id = " + id;
    con.query(query, function(err, result){
        if (err) {
            res.status(500).json({message: err.message})
        }
        else {
            res.status(200).json({data: result})
        }
        console.log(query)
        console.log(result)
    })
})

router.post("/add", (req, res) => {
    const id  = req.body.user_account_id;
    const major = req.body.major;
    const school_name = req.body.school_name;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const gpa = req.body.gpa;

    query = "INSERT INTO education_detail VALUES (" + id + ", '" + major + "','" + school_name + "','" + start_date + "','" + end_date + "'," + gpa + ")";
    con.query(query, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log("inserted 1 row into education_detail")
        res.status(200).send("inserted 1 row into education_detail")
    })
        

})


module.exports = router;