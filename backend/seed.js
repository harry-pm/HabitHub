const { Record, Habit, User } = require('./models/habits.model');
const db = require('./databaseConfig.js');

const recordsData = [
    {
        user: {username: 'juicey', password: 'yusey'},
        habits: [
            {name: "washing", streak: 3, completed: [true], lastCompleted: 19/01/2020},
            {name: "pushups", streak: 100, completed: [true, true, false], lastCompleted: 19/01/2020}
        ]
    },
    {
        user: {username: "jtrigger", password: "glock"},
        habits: [
            {name: "eating", streak: 0, completed: [false], lastCompleted: 02/03/1996}
        ]
    }
]

const seedData = () => {
    db.collections['records'].drop((err)=>{
        //collection cleared
    })
    for (let recordData of recordsData) {
        let habits = [];
        for(recordHabit of recordData.habits)
            habits.push(new Habit(recordHabit))
        let user = new User(recordData.user)
        let record = new Record({user:user, habits:habits})
        record.save((err)=> {
            if(err)
                console.log(err)
            //data saved
        })
    }
}

module.exports = seedData;