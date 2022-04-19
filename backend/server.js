const express = require('express')
const app = express()

const con = require("./DBConnection")

const SkillsRoute = require('./routes/SkillsRoute')
const ExperienceRoute = require('./routes/ExperienceRoute')
const EducationRoute = require('./routes/EducationRoute')

app.use(express.json())
app.use("/skill", SkillsRoute)
app.use("/experience", ExperienceRoute)
app.use("/education", EducationRoute)

app.get("/", (req, res) => {
    console.log("server called");
    res.send("hello");
})




app.get("/profile/:id", (req, res) => {
    const id  = req.params.id
    const query = "SELECT * FROM seeker_profile WHERE user_account_id = " + id;
    con.query(query, function(err, result){
        if (err) throw err
        res.json({
            data: result
        });
        console.log(query)
        console.log(result)
    })
})





app.get("/saved/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM bookmarks, job_listing WHERE bookmarks.job_listing_id = job_listing.job_listing_id AND user_account_id = " + id
    con.query(query, (err, result) => {
        res.json({
            data: result
        })
    })
})


app.get("/company/:id", (req, res) => {
    const id = req.params.id
    const query = "SELECT company_name FROM company WHERE company_id = " + id
    con.query(query, (err, result) => {
        res.json({
            data: result
        })
    })
})

app.get("/dashboard", (req, res) => {
    const query = "SELECT * FROM job_listing"
    con.query(query, (err, result) => {
        res.json({
            data: result
        })
    })
})

app.listen(3001)