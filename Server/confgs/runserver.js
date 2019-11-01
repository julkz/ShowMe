const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const postRoutes = require('./routes/posts');
const getRoutes = require ('./routes/gets');

app.post('/', postRoutes);
app.use('/', getRoutes);

// Routes
app.get('/', (req,res) => {
    res.send('We are on home!');
})

const atlasdb = " mongodb+srv://root:123@showme-uvps4.mongodb.net/test?retryWrites=true&w=majority";

//Database connection
try {
    mongoose.connect('mongodb+srv://root:123@showme-uvps4.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,   
      useUnifiedTopology: true
    }, () => {
    console.log("Established connection to database.") }) 
} catch( err) {
    console.log(err);
    throw err;
}



const connection = '192.168.1.66';
const Port = 4300;

// Starts listening
console.log('Express started listening  at '+ connection + ' and port: '+Port);
app.listen(Port, connection);

