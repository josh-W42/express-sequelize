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
const axios = require('axios');

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
    res.send("I'm working");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});