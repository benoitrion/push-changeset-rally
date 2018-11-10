const express = require('express');
const app = express();

const dotenv = require('dotenv').config()

// Read api key from environment variable or from file.
const apiKey = process.env.API_KEY;

// Pull changest, send them to Rally and verify that they are added to specific task, defect or hierachial-item
app.post('/verifyChangeSet', (req, res) => {
    res.send(apiKey);
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8082);

