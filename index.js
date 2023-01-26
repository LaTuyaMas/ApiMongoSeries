const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {mongoose} = require('./database');
const {json} = require("express");

// Settings
app.set('port', process.env.PORT || 3678);

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/series', require('./routes/serie.route'));
app.use('/',(req, res) => res.send('API in /api/series'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
})