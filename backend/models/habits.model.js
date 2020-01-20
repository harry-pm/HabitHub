const mongoose = require('mongoose');
const schema = mongoose.Schema;

let userSchema = new schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

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

let recordSchema = new schema({
    user: userSchema,
    habits: [habitSchema]
});

module.exports = mongoose.model("Record", recordSchema)