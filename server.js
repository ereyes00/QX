const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '/app')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './app/index.html'));
});

app.listen('7000', () => console.log("Listening to port 7000"));
