const { Record, Habit, User } = require('./models/habits.model');
const db = require('./databaseConfig.js');

// read all records
const readAllRecords =  () => {
    return Record.find({}, (err, records) => {
        // console.log(records);
    });
}

//read one user by id
const readUser = (id) => {
    return Record.findOne({"user._id" : id}, (err, user) => {
        // console.log(user)
    })
}


module.exports = { readAllRecords, readUser };