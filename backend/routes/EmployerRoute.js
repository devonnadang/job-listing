const express = require('express');
const router = express.Router();
const con = require('../DBConnection')

// get all the applicants for a specific job listing
router.get("/list/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM applications WHERE job_listing_id = " + id;
    con.query(query, function(err, result){
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        }
        else {
            res.status(200).json({data: result})
        }
    })
})

// get all job listings posted by a specific employer
router.get("/list2/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM job_listing WHERE posted_by_id = " + id;
    con.query(query, function(err, result){
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        }
        else {
            res.status(200).json({data: result})
        }
    })
})

// post (create) a job listing
router.post("/add", (req, res) => {
    const values = [
        req.body.id,
        req.body.company_name,
        req.body.job_location,
        req.body.job_title,
        req.body.job_description,
        req.body.job_experience,
        req.body.salary,
        req.body.image_url
    ]
    //req.body.id
    //const job_name = req.body.job_name
    //INSERT INTO job_finder.job_listing (posted_by_id, company_name, job_location, job_title, job_description, job_experience, salary, image_url) 
    query = "INSERT INTO job_listing (posted_by_id, company_name, job_location, job_title, job_description, job_experience, salary, image_url) VALUES (?,?,?,?,?,?,?,?)"
    con.query(query, values, function(err, result){
        if (err) {
            console.log(err)
            res.status(500).json({message: err.message})
        }
        else {
            res.status(200).json({message: "inserted 1 row into job_listing"})
        }
    })
                
})

// job_listing db table => posted_by_id and job_listing_id
// applications db table => user_account_id and job_listing_id

module.exports = router;