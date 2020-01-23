//imports
const { Habit, User } = require('./habits.model');
const db = require('./databaseConfig.js');
const {
    summary
} = require('date-streaks');

//reset completed values of habit after each day
// const resetCompleted =(user)=> {

//     if(!isToday(user.lastAcessed)){
//         user.habits.map(habit => {
//             for(let index in habit.completed)
//             {
//                 habit.completed[index] = false;
//             }
                
//         })
//     }
//     user.lastAcessed = new Date();
//     user.save()
// }

    


//check is today
const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
}

//check if habit is on streak 
const checkStreak = (habits) => {
       habits.map(habit => {
           //if habit is completed
           if(!habit.completed.includes(false)){
           //if habit is not null or today (as giving today with this library results in a streak)
           if(habit.lastCompleted !== null && !isToday(habit.lastCompleted))
           {
            const dates = [
                habit.lastCompleted
            ];
            if (summary({dates}).currentStreak === 1) habit.streak++;
            else if (summary({dates}).currentStreak === 0) habit.streak = 0;

            for(let i in habit.completed){habit.completed[i] =false;}
           }
            
         }
         else if (habit.completed.includes(true))
         {
            //if habit is not null or today (as giving today with this library results in a streak)
           if(habit.lastCompleted !== null && !isToday(habit.lastCompleted))
           {
            const dates = [
                habit.lastCompleted
            ];
            if (summary({dates}).currentStreak === 1) habit.streak++;
            else if (summary({dates}).currentStreak === 0) habit.streak = 0;
            for(let i in habit.completed){habit.completed[i] =false;}
           }
         }
         else{
            habit.streak = 0;
         }
            })
        return habits
        }

// read all users
const readAllUsers =  () => {
    return User.find({}, "username password")
}

//read one user by id
const readUser = (id) => {
    return User.findOne({"_id" : id})
}

const addUser = (username, password) => {
    //return what is sent for testing late
        let user = new User({username:username, password:password, habits: [] })
        return user.save
     
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
        // console.log(user)
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

    readUser(userId).then(user => {
        console.log("Updated")
        user.habits.map((habit,index) => {
            //check habit ids match
                habit.completed = habits[index].completed
                habit.streak = habits[index].streak
                if(!habit.completed.includes(false))
                    habit.lastCompleted = new Date();
        })
        
        user.save((err,data) => {
            if(err) console.log("saving ");
        })
    })
    .catch(err => {
        if(err) console.log("error reading");
    })  
}



module.exports = { readAllUsers, readUser, addUser, addHabit, updateHabit, checkStreak };