const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const seedData = require("./seed.js");
const { readAllUsers,  readUser, addUser, addHabit } = require("./database.js");
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


// Get all users
app.get("/readAllUsers", (req, res) => {
    readAllUsers().then((response,err) => {
        //remove habits as this call will be used to validate user login, so habits not needed
        //removes habits from user record when sent
        response.map(user => {user.habits = null})
        res.json(response)
    })
})

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
app.post("/addHabit/:id", (req,res)=> {
    let id = req.params.id;
    let name = req.body.name;
    let completed = req.body.completed;
    let streak = req.body.streak;
    let lastCompleted = req.body.lastCompleted;
    console.log(id, name, completed, streak,lastCompleted)
    res.send(addHabit(id, name,completed,streak,lastCompleted))
})

//update habit completed

//remove habit


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
