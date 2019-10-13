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

app.use('/', getRoutes);

// Routes
app.get('/', (req,res) => {
    res.send('We are on home!');
})

const jsousa = "mongodb://david:motasousa@localhost/yourdatabase";
const atlasdb = " mongodb+srv://root:123@showme-uvps4.mongodb.net/test?retryWrites=true&w=majority";

//Database connection
try {
    mongoose.connect('mongodb+srv://root:123@showme-uvps4.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        
      useUnifiedTopology: true
    },  () => {
    console.log("Established connection to database.") }) 
} catch( err) {
    console.log(err);
    throw err;
}


// Starts listening
console.log("Express started listening ...");
app.listen(4300, '192.168.1.66');

