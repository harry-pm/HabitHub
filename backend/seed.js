const { Habit, User } = require('./habits.model');
const db = require('./databaseConfig.js');


//dates are weird
const usersData = [
    {
        username: 'juicey',
        password: 'yusey',
        habits: [
            {name: "washing", streak: 3, completed: [true], lastCompleted: new Date("01/19/2020")},
            {name: "pushups", streak: 100, completed: [true, true, false], lastCompleted: new Date("01/19/2020")}
        ]
    },
    {
        username: "jtrigger",
        password: "glock",
        habits: [
            {name: "eating", streak: 0, completed: [false, true, true], lastCompleted: new Date("01/22/2020")}
        ]
    },
    {
        username: "Lau Ran",
        password: "bestMc",
        habits: [
            {name:"exercise", streak: 7, completed:[true], lastCompleted: new Date("01/22/2020")}
        ]
    }
]

const seedData = () => {
    //clear db
    db.collections['users'].drop((err)=>{
    
    for (let userData of usersData) {
        let habits = [];
        for(let habit of userData.habits)
            habits.push(new Habit(habit))
        let user = new User({
            username : userData.username,
            password: userData.password,
            habits: habits
        })
        user.save((err)=> {
            if(err)
                console.log(err)
            //data saved
        })
    }
})
}

module.exports = seedData;