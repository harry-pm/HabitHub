const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const seedData = require("./seed.js");
const { readAllUsers } = require("./database.js");
app.use(cors());
app.use(bodyParser.json());

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully")
// })

//seed data
app.get('/seed', (req, res) => {
    seedData();
    res.send("Data seeded.");
})

// Get all users
app.get("/getAllUsers", (req, res) => {
    readAllUsers().then((response,err) => {
        res.json(response);
    })
});

//get one record

//save new user

//get one user

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
