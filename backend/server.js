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
    const query = "SELECT * FROM company WHERE company_id = " + id
    con.query(query, (err, result) => {
        res.json({
            data: result
        })
    })
})

app.get("/joblisting/all", (req, res) => {
    const query = "SELECT * FROM job_listing"
    con.query(query, (err, result) => {
        res.json({
            data: result
        })
    })
})

app.post("/joblisting/save", (req, res) => {
    const userID = req.body.id
    const jobID = req.body.jobID
    const query = "INSERT INTO bookmarks VALUES (" + userID + ", " + jobID + ")"
    con.query(query, function(err, result){
       if (err) {
           console.log(err)
           res.send(err.message)
       }
       else {
           res.send("inserted 1 row into bookmarks")
       }
    })
})

app.post("/joblisting/unsave", (req, res) => {
    const userID = req.body.id
    const jobID = req.body.jobID
    const query = "DELETE FROM bookmarks WHERE user_account_id = " + userID + " AND job_listing_id = " + jobID
    con.query(query, function(err, result){
        if (err) throw err
        console.log(query)
        console.log("deleted 1 row from bookmarks")
        res.send("deleted 1 row into bookmarks")
    })
})

app.get("/joblisting/tags/:id", (req, res) => {
    const jobID = req.params.id
    const query = "SELECT * FROM job_types, type WHERE job_types.type_id = type.type_id AND job_listing_id = " + jobID
    con.query(query, (err, result) => {
        if (err){
            res.send(err.message)
        }
        else {
            res.json(result)
        }
    })
})

app.listen(3001)