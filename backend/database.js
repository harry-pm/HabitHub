const { Habit, User } = require('./habits.model');
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
    //return what is sent for testing late
        let user = new User({username:username, password:password, habits: [] })
        return user.save()
     
}

const addHabit = (id, name, completed) => {
    let habit = new Habit({
        name : name,
        completed: completed,
        streak : 0,
        lastCompleted : null
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

const updateHabit = (userId, habits) => {

    User.findById(userId, (err, user) => {
        if(err) console.log(err);

        user.habits.map((habit,index) => {
            //check habit ids match
                habit.completed = habits[index].completed
                if(!habit.completed.includes(false))
                    habit.lastCompleted = new Date();
        })
        
        user.save((err,data) => {
            if(err) console.log(err);
        })
    })
}



module.exports = { readAllUsers, readUser, addUser, addHabit, updateHabit };