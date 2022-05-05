const express = require('express')
const app = express()
const cors = require("cors")

const con = require("./DBConnection")

const SkillsRoute = require('./routes/SkillsRoute')
const ExperienceRoute = require('./routes/ExperienceRoute')
const EducationRoute = require('./routes/EducationRoute')

app.use(express.json())
app.use(cors());

//create route to insert registration info
app.post("/register", (req, res) => {
    const firstName = req.body.FirstName;
    const lastName = req.body.LastName; 
    const email = req.body.email;
    const password = req.body.password;

    con.query("INSERT INTO job_finder.Users (FirstName, LastName, email, password) VALUES (?,?,?,?)", 
    [firstName, lastName, email, password], 
    (err, result) => {
        console.log(err);
    });
})

// create route for validating Login
app.post("/login", (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    con.query(
        "SELECT * FROM job_finder.Users WHERE email = ? AND password = ?", 
    [email, password], 
    (err, result) => {
        if (err) {
            res.send({ err: err });
        } 

        if (result.length > 0) {
            res.send(result);
        } else {
             res.send({message: "Wrong email/password"});
        }
    });
});

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

app.get("/joblisting/all", (req, res) => {
    const query = "SELECT * FROM job_listing"
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

app.post("/joblisting/save", (req, res) => {
    const userID = req.body.id
    const jobID = req.body.jobID
    const query = "INSERT INTO bookmarks VALUES (" + userID + ", " + jobID + ")"
    con.query(query, function(err, result){
        if (err) {
           res.status(500).json({message: err.message})
        }
        else {
           res.status(200).json({message: "inserted 1 row into bookmarks"})
        }
    })
})

app.post("/joblisting/unsave", (req, res) => {
    const userID = req.body.id
    const jobID = req.body.jobID
    const query = "DELETE FROM bookmarks WHERE user_account_id = " + userID + " AND job_listing_id = " + jobID
    con.query(query, function(err, result){
        if (err) {
            res.status(500).json({message: err.message})
        }
        else {
            res.status(200).json({message: "deleted 1 row from bookmarks"})
        }
        console.log(query)
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