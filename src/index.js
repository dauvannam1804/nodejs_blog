const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const exp = require('constants');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes Init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
