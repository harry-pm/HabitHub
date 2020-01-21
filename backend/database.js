const { Record, Habit, User } = require('./models/habits.model');
const db = require('./databaseConfig.js');

// read all records
const readAllUsers =  () => {
    return Record.find({}, (err, users) => {
        console.log(users);
    });
}

module.exports = { readAllUsers };