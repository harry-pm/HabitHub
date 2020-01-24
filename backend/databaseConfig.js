let dbName = 'HabitHub'
if(process.env.NODE_ENV === 'test')
{ dbName = 'HabitHub_test';}
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/"+dbName, { useNewUrlParser: true });
const dbConnection = mongoose.connection;

module.exports = dbConnection;