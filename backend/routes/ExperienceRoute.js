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

router.post("/add", (req, res) => {
    const id = req.body.user_account_id;
    const job_title = req.body.job_title;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const company_name = req.body.company_name;
    const description = req.body.description;
    const location = req.body.location;

    query = "INSERT INTO experience_detail VALUES (" + id + ", '" + job_title + "','" +start_date + "','" + end_date +"','" + company_name + "','" + description + "','" + location + "')";
    con.query(query, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log("inserted 1 row into experience_detail");
        res.status(200).send("inserted 1 row into experience_detail")
    })
});

router.post("/delete", (req, res) => {
    const id = req.body.user_account_id;
    const job_title = req.body.job_title;
    const company_name = req.body.company_name;

    query = "DELETE FROM experience_detail WHERE user_account_id = " + id + " AND job_title = '" + job_title + "' AND company_name = '" + company_name + "'";

    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json({message: err.message})
        } else {
            res.status(200).json({message: "deleted 1 row from experience_detail"})
        }

        console.log(query);
    })
})

module.exports = router;