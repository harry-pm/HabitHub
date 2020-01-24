//imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const seedData = require("./seed.js");
const seedDataTest = require("./test/seedTest.js")
const path = require("path");
const {
    readAllUsers,
    readUser,
    addUser,
    addHabit,
    updateHabit,
    checkStreak
} = require("./database.js");

//express setup
app.use(cors());
app.use(bodyParser.json());

// Provides Express with access to the 'Assets' folder within 'public'
app.use(express.static(path.join(__dirname, 'public')));

//seed data
app.get('/seed', (req, res) => {
    seedData();
    res.send("Data seeded.");
});

app.get('/seedTest', (req, res) => {
    // seedDataTest();
    res.send("Test data seeded.");
});

// get all users
app.get("/readAllUsers", (req, res) => {
    readAllUsers()
    .then(response => {res.json(response)})
    .catch(err=> {res.json(err)})
})

//get one users habits
app.get("/readUserHabits/:id", (req, res) => {
    let id = req.params.id;
    readUser(id).then((user, err) => {
            let habits = checkStreak(user.habits)
            res.json(habits)
        })
        .catch(err => {
            res.json(err)
        })

})

//add new user
app.post("/addUser", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    //handle unqiue user 
    let validUser = true
    readAllUsers()
    .then(users=> {
        users.map(user=>{
            if(user.username===username)
                validUser = false;
        })
    })
    .then(()=>{
        if(validUser)
        {
        addUser(username, password).then(data => {
            res.send({
                user: data,
                success: true
            })
        }).catch(err => {
            res.send({
                success: false
            })
        })
    }
    else
    {
        res.send({success:false})
    }
        
    })
    .catch(err=>{})
    


        })
//add one habit
app.post("/addHabit/:id", (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let completed = req.body.completed;
    res.send(addHabit(id, name, completed))
})

//update habit completed
app.post("/updateHabits/:userId", (req, res) => {
    let userId = req.params.userId;
    let habits = req.body.habits;
    updateHabit(userId, habits);
    res.send(req.body.habits);
})

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

module.exports = app;