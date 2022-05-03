const express = require('express');
const router = express.Router();
const con = require('../DBConnection')

router.post("/save", (req, res) => {
    const userID = req.body.id
    const jobID = req.body.jobID
    const query = "INSERT INTO bookmarks VALUES (" + userID + ", " + jobID + ")"
    con.query(query, function(err, result){
        if (err) {
            console.log(err)
           res.status(500).json({message: err.message})
        }
        else {
           res.status(200).json({message: "inserted 1 row into bookmarks"})
        }
    })
})

router.post("/apply", (req, res) => {
    const userID = req.body.id
    const jobID = req.body.jobID
    const query = "INSERT INTO applications VALUES (" + userID + ", " + jobID + ")"
    con.query(query, function(err, result){
        if (err) {
            console.log(err)
           res.status(500).json({message: err.message})
        }
        else {
           res.status(200).json({message: "inserted 1 row into applications"})
        }
    })
})

router.get("/all", (req, res) => {
    const query = "SELECT * FROM job_listing"
    con.query(query, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json({ message: err.message})
        }
        else {
            res.status(200).json({data: result})
        }
    })
})


router.post("/unsave", (req, res) => {
    const userID = req.body.id
    const jobID = req.body.jobID
    const query = "DELETE FROM bookmarks WHERE user_account_id = " + userID + " AND job_listing_id = " + jobID
    con.query(query, function(err, result){
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        }
        else {
            res.status(200).json({message: "deleted 1 row from bookmarks"})
        }
    })
})

router.get("/tags/:id", (req, res) => {
    const jobID = req.params.id
    const query = "SELECT * FROM job_types, type WHERE job_types.type_id = type.type_id AND job_listing_id = " + jobID
    con.query(query, (err, result) => {
        if (err){
            console.log(err)
            res.send(err.message)
        }
        else {
            res.json(result)
        }
    })
})

module.exports = router;