const express = require('express'); //imported express package

const app = express();  // using express as a fucntion (created an application)

const mongoose = require('mongoose');

const studentRoutes = require('./api/routes/students');
const userRoutes = require('./api/routes/users');


mongoose.connect('mongodb+srv://nadia:nadia@cluster0.gs38oxb.mongodb.net/?retryWrites=true&w=majority')


app.use(express.json());

app.use(express.urlencoded({

    extended: true 
}))

app.use('/students', studentRoutes);
app.use('/users', userRoutes);


module.exports = app;