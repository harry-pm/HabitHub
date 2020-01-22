const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const seedData = require("./seed.js");
const { readAllUsers,  readUser, addUser, addHabit, updateCompleted, updateHabit } = require("./database.js");
const { summary } = require('date-streaks');
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

const checkStreak = (habits) => {
    habits.map(habit => {
        //update streak
        if(habit.lastCompleted != null)
        {
            console.log(habit.lastCompleted)
            let dateArray = [new Date("2020-01-21"), new Date("2020-01-22")] 
            console.log(dateArray)
            console.log(summary({dateArray}))
            if(summary({dateArray}).currentStreak > 0)
                habit.streak = habit.streak + summary({dateArray}).currentStreak
            else
                habit.streak = 0
            for(completed in habit.completed)
                habit.completed = false;
        }
            

    })
    return habits
}

//get one users habits
app.get("/readUserHabits/:id", (req,res) => {
    let id = req.params.id;
    readUser(id).then((response,err)=>{

        let habits = checkStreak(response.habits)
        res.json(habits)
    })
    .catch(err => { 
        res.json(err)
    })

})

//add new user
app.post("/addUser", (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    //validation?
    addUser(username,password).then(data=> {
        res.send({success: true})
    }).catch(err => {
        res.send({success: false})
    }) 
    
    
})
//add one habit
app.post("/addHabit/:id", (req,res)=> {
    let id = req.params.id;
    let name = req.body.name;
    let completed = req.body.completed;
    console.log(id, name, completed)
    res.send(addHabit(id, name,completed))
})

//update habit completed
app.post("/updateHabit", (req,res)=> {
    let userId = req.body.userId;
    let habitId = req.body.habitId;
    let completed = req.body.completed;
    updateCompleted(userId, habitId, completed);
    res.send("shush postman")
})

//remove habit


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
