const { Record, Habit, User } = require('./models/habits.model');
const db = require('./databaseConfig.js');

// read all records
const readAllUsers = async () => {
    await Record.find({}, (err, users) => {
        console.log(users);
        return users;
    });
}

module.exports = { readAllUsers };