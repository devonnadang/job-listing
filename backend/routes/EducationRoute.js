const express = require('express');
const router = express.Router();
const con = require('../DBConnection')

router.get("/list/:id", (req, res) => {
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


module.exports = router;