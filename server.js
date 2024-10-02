const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const exp = require('constants');

//dotenv configuration
dotenv.config();

//Rest Object
const app = express();

//Middlewares
app.use(cors({origin: 'http://localhost:3000', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']}));
app.use(express.json());

//static files access
app.use(express.static(path.join(__dirname, './client/build')));

//Routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'));

app.get('*',function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

process.on('uncaughtException', function(err) {
    console.log(err);
});

app.get('/',(req, resp) => {
    resp.send("<h1>Welcome to node server</h1>");
});

//Port
const port = process.env.PORT || 8080;

//Listen 
app.listen(() => {
    console.log(`Server listening on ${port}`);
});