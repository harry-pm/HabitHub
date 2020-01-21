const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const seedData = require("./seed.js");
const { readAllRecords,  readUser, addUser } = require("./database.js");
app.use(cors());
app.use(bodyParser.json());

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully")
// })

//seed data
app.get('/seed', (req, res) => {
    seedData();
    res.send("Data seeded.");
})


//Get all records
app.get("/readAllRecords", (req, res) => {
    readAllRecords().then((response,err) => {
        res.json(response);
    })
});

// Get all users
app.get("/readAllUsers", (req, res) => {
    readAllRecords().then((response,err) => {
        users = []
        response.map(record => {
            users.push(record.user)
        })
        res.json(users);
    })
});

//get one users habits
app.get("/readUserHabits/:id", (req,res) => {
    let id = req.params.id;
    readUser(id).then((response,err)=>{
        res.json(response.habits)
    })
    .catch(err => { 
        res.json(err)
    })

})

//add new user
app.post("/addUser", (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username,password)
    //validation?
    res.send(addUser(username,password))
    
})
//add one habit

//update habit completed

//remove habit


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
