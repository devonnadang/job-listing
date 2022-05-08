const express = require('express')
const app = express()

const cors = require("cors")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const saltRounds = 10

const con = require("./DBConnection")

const SkillsRoute = require('./routes/SkillsRoute')
const ExperienceRoute = require('./routes/ExperienceRoute')
const EducationRoute = require('./routes/EducationRoute')

app.use(express.json())
// needed for cookies/session
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "user_account_id",
    secret: "CS160-job-listing",
    resave: false, 
    saveUninitialized: false, 
    cookie: {
        expires: 60 * 60 * 24, // expires in 24 hours
    },
}));

//create route to insert registration info
app.post("/register", (req, res) => {
    const firstName = req.body.FirstName;
    const lastName = req.body.LastName; 
    const email = req.body.email;
    const password = req.body.password;

    // sending hashed password with db query 
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err) {
            console.log(err)
        }
        con.query("INSERT INTO job_finder.user_account (email, user_type_id, token, first_name, last_name, image_url) VALUES (?,?,?,?,?,?)", 
        [email, 1, hash, firstName, lastName, null], // note that 1 represents an employee type (default)
        (err, result) => {
            console.log(err);
        });
    })
    
})

// create route for Login persistance app.get
app.get("/login", (req, res) => {
    // if user is logged in
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({loggedIn: false});
    }
});

// create route for validating Login
app.post("/login", (req, res) =>{
    const email = req.body.email;
    const password = req.body.token; // token comes from login.js - axios.post function

    con.query(
        "SELECT * FROM job_finder.user_account WHERE email = ?;", 
        email, 
        (err, result) => {
            if (err) {
                res.send({ err: err });
            } 

            if (result.length > 0) {    // token is the field for password in DB (result[0].token)
                bcrypt.compare(password, result[0].token, (error, response) => {
                    if(response) {
                        // creating a session called user
                        // contains the result we fetched from database
                        // whenever we refresh the page we can 
                        req.session.user = result;
                        console.log(req.session.user); // prints the session info on server-side
                        res.send(result);
                    } else {
                        res.send({message: "Wrong email/password"});
                    }
                });
            } else {
                res.send({message : "User doesn't exist"});
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