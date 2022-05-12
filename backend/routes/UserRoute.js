const express = require('express');
const router = express.Router();
const con = require('../DBConnection')

router.get("/all", (req, res) => {
    const query = "SELECT user_account_id, first_name, last_name, image_url FROM user_account"
    con.query(query, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        }
        else {
            res.status(200).json(result)
        }
    })
})


router.get("/education/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM education_detail WHERE user_account_id = " + id
    con.query(query, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        } else {
            res.status(200).json(result)
        }
    })
})

router.get("/experience/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM experience_detail WHERE user_account_id = " + id
    con.query(query, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        } else {
            res.status(200).json(result)
        }
    })
})

router.get("/skills/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM seeker_skill_set WHERE user_account_id = " + id
    con.query(query, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        } else {
            res.status(200).json(result)
        }
    })
})

router.get("/profile/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT image_url, first_name, last_name FROM user_account WHERE user_account_id = " + id
    con.query(query, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        } else {
            res.status(200).json(result)
        }
    })
})

module.exports = router;