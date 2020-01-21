const mongoose = require('mongoose');
const schema = mongoose.Schema;

let habitSchema = new schema({
    name: {
        type: String
    },
    completed: {
        type: [Boolean]
    },
    streak: {
        type: Number
    },
    lastCompleted : {
        type: Date
    }
})

let userSchema = new schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    habits: [habitSchema]
})



module.exports = {
    Habit: mongoose.model("Habit", habitSchema),
    User: mongoose.model("User", userSchema)}