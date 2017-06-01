const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const mongodbUri = require('./mongodb-uri').mongodbUri;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '/app')));

var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () {console.log("Connected to MongoDB")});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './app/index.html'));
});

app.listen('7000', () => console.log("Listening to port 7000"));
