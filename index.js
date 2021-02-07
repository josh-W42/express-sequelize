// Envirnment
require('dotenv').config();
// Express
const express = require('express');
const app = express();
// Embeded Javascript
const expressEjsLayouts = require('express-ejs-layouts');
// PUT and DELETE
const methodOverride = require('method-override');
// Axios (if you want it)
// const axios = require('axios');
// Database
const db = require('./models');

// MIDDLEWARE

// Use EJS
app.set('view engine', 'ejs');
// Use express layouts
app.use(expressEjsLayouts);
// Body Parser
app.use(express.urlencoded({ extended: false}));
// PUT DELETE
app.use(methodOverride('_method'));

// SOMETHING NEW
app.use(require('morgan')('dev'));
// It will do some logging to the console when a request is made
// I like this

// ROUTES or Controlers

app.get('/', (req, res) => {
    res.redirect('/coders');
});

// The Route to get all coders
app.get('/coders', (req, res) => {
    db.user.findAll()
    .then(users => {
        res.render('./index', { users });
    }).catch(error => {
        console.log("An error has occured: ", error);
    });
});

// To the new coder form
app.get('/coders/new', (req, res) => {
    res.render('./new');
});

// POST

// Add a new coder to the database
app.post('/coders', (req, res) => {

    // Something weird here, it will actually parse strings into their own
    // datatypes, but in reality, you should be parsing them yourself just in case.
    try {
        db.user.create(req.body)
        .then(data => {
            console.log('New user created');
            res.redirect('/coders');
        });
    } catch (error) {
        console.log('An error has occured');
        res.status(401);
        res.redirect('/coders');
    }

});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});