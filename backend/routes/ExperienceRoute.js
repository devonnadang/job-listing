const express = require('express');
const router = express.Router();
const con = require('../DBConnection')

router.get("/list/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM experience_detail WHERE user_account_id = " + id;
    con.query(query, function(err, result) {
        if (err) {
            res.status(500).json({message: err.message})
        }
        else {
            res.status(200).json({data: result})
        }
        console.log(query)
        console.log(result)
    });
})

module.exports = router;