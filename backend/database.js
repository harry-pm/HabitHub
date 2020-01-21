const { Habit, User } = require('./models/habits.model');
const db = require('./databaseConfig.js');

// read all users
const readAllUsers =  () => {
    return User.find({}, (err, records) => {
        // console.log(records);
    });
}

//read one user by id
const readUser = (id) => {
    return User.findOne({"_id" : id}, (err, user) => {
        // console.log(user)
    })
}

const addUser = (username, password) => {
    //return what is sent for testing later
    let user = new User({username:username, password:password, habits: [] })
    user.save((err,data) => {
        if(err)
            console.log(err)
        //data saved
        console.log(data)
    })
    return user
}

const addHabit = (id, name, completed, streak, lastCompleted) => {
    let habit = new Habit({
        name : name,
        completed: completed,
        streak : streak,
        lastCompleted : lastCompleted
    })
    User.findById(id,(err,user)=>{
        if(err)
            console.log(err)
        console.log(user)
        user.habits.push(habit)
        user.save((err,data) => {
            if(err)
                console.log(err)
            //data saved
            // console.log(data)
        })
    })
}

const updateCompleted = (userId, habitId, completed) => {

    User.findById(userId, (err, user) => {
        if(err)
            console.log(err)
        user.habits.map(habit => {
            if (String(habit._id) === habitId)
                habit.completed = completed
        })
        user.save((err,data) => {
            if(err)
                console.log(err)
        })
    })
}

const updateHabit = (userId, habitId, updatedHabit) => {

    User.findById(userId, (err, user) => {
        if(err)
            console.log(err)
        user.habits.map(habit => {
            if (String(habit._id) === habitId)
                habit.completed = updatedHabit.completed;
                habit.streak = updatedHabit.streak;
                habit.lastCompleted = updateHabit.lastCompleted;
        })
        user.save((err,data) => {
            if(err)
                console.log(err)
        })
    })
}

module.exports = { readAllUsers, readUser, addUser, addHabit, updateCompleted };