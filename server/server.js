const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();


const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Testing Server'
    });
})

app.listen('5000', () => {
    console.log('Server listening');
})