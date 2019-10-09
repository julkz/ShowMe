const express = require('express');
const app = express();

const mongoose = require('mongoose');

//Middleware
app.use('/posts', () => {
    console.log("posts middleware ! :)");
})

// Routes
app.get('/', (req,res) => {
    res.send('We are on home!');
})

app.get('/posts', (req,res) => {
    res.send('We are on posts!');
});


//Database connection
mongoose.connect('mongodb+srv://root:123@showme-uvps4.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true },  () => {
    console.log("Connection established.")
});


// Starts listening
console.log("Starting listening ! ...");
app.listen(4300);
