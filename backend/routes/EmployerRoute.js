const express = require('express');
const router = express.Router();
const con = require('../DBConnection')

// get all the applicants for a specific job listing
router.get("/list/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT applications.user_account_id, image_url, first_name, last_name FROM applications, user_account WHERE applications.user_account_id = user_account.user_account_id AND job_listing_id = " + id
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

// get all job listings posted by a specific employer
router.get("/list2", (req, res) => {
    const id  = req.session.user[0].user_account_id
    const query = "SELECT * FROM job_listing WHERE posted_by_id = " + id;
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

// post (create) a job listing
router.post("/add", (req, res) => {

    //const job_listing_id = req.body.job_listing_id;
    const posted_by_id = req.session.user[0].user_account_id
    //const posted_by_id = req.body.id
    const company_name = req.body.company_name;
    const job_location = req.body.job_location;
    const job_title = req.body.job_title;
    const job_description = req.body.job_description;
    const job_experience = req.body.job_experience;
    const salary = req.body.salary;
    const image_url = req.body.image_url;

    //req.body.id
    //const job_name = req.body.job_name
    //INSERT INTO job_finder.job_listing (posted_by_id, company_name, job_location, job_title, job_description, job_experience, salary, image_url) 
    
    query = "INSERT INTO job_listing (posted_by_id, company_name, job_location, job_title, job_description, job_experience, salary, image_url) VALUES (?,?,?,?,?,?,?,?)";
    con.query(query, [posted_by_id, company_name, job_location, job_title, job_description, job_experience, salary, image_url], function(err, result){
        if (err) {
            res.status(500).json({message: err.message})
            console.log(err.message);
        }
        else {
            res.status(200).json({message: "inserted 1 row into job_listing"})
        }
        console.log(query)
    })
                
})

// job_listing db table => posted_by_id and job_listing_id
// applications db table => user_account_id and job_listing_id

module.exports = router;