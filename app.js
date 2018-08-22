const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const { test } = req.body;
   res.status(200).send(test);
});

module.exports = app;