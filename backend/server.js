const express = require('express')
const app = express()

const con = require("./DBConnection")

const SkillsRoute = require('./routes/SkillsRoute')
const ExperienceRoute = require('./routes/ExperienceRoute')
const EducationRoute = require('./routes/EducationRoute')
const EmployerRoute = require('./routes/EmployerRoute')
const JobListingRoute = require('./routes/JobListingRoute')


app.use(express.json())
app.use("/skill", SkillsRoute)
app.use("/experience", ExperienceRoute)
app.use("/education", EducationRoute)
app.use("/employer", EmployerRoute)
app.use("/joblisting", JobListingRoute)

app.get("/", (req, res) => {
    console.log("server called");
    res.send("hello");
})

app.get("/profile/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM user_account WHERE user_account_id = " + id;
    con.query(query, function(err, result){
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json({data: result})
        }
        console.log(query)
        console.log(result)
    })
})


app.get("/saved/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM bookmarks, job_listing WHERE bookmarks.job_listing_id = job_listing.job_listing_id AND user_account_id = " + id
    con.query(query, (err, result) => {
       if (err) {
           res.status(500).json({ message: err.message})
       }
       else {
           res.status(200).json({data: result})
       }
       console.log(query)
       console.log(result)

    })
})

app.get("/applied/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM applications, job_listing WHERE applications.job_listing_id = job_listing.job_listing_id AND user_account_id = " + id
    con.query(query, (err, result) => {
       if (err) {
           res.status(500).json({ message: err.message})
       }
       else {
           res.status(200).json(result)
       }
       console.log(query)
       console.log(result)
    })
})


app.get("/company/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM company WHERE company_id = " + id
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message})
        }
        else {
            res.status(200).json({data: result})
        }
        console.log(query)
        console.log(result)
    })
})



app.listen(3001)