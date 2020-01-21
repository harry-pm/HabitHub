const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/HabitHub", { useNewUrlParser: true });
const dbConnection = mongoose.connection;

module.exports = dbConnection;