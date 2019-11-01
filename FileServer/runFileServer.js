const express = require('express');
const app = express();

// Routes
app.get('/wp-content/:filename', (req,res) => {
    res.sendFile(__dirname +'/resources/'+ req.params.filename);
});

app.get('/wp-assets/:filename', (req,res) => {
    res.sendFile(__dirname +'/assets/'+ req.params.filename);
});

const connection = '192.168.1.66';

console.log("started listening")
app.listen(4100, connection);