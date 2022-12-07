// Import third-party module
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
// Import local module
const locfunc = require('./public/js/main')
// Variable for express
const app = express()
// Variable for port
const port = 3000

// Basic setup using EJS with Express JS
app.set('view engine', 'ejs')
// Basic setup using Express-ejs-layouts with Express JS
app.use(expressLayouts)
// Allow middleware to execute these assets to public or web browser
app.use(express.static('public'))

app.use(morgan('dev'))

// Functions to switch directory in URL
app.get('/', (req, res) => {
    res.render('index', {
        name : 'Nathanure',
        title : 'Home',
        layout : 'layout/html'
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        name : 'Nathanure',
        title : 'About',
        layout : 'layout/html'
    });
})
app.get('/contact', (req, res) => {
    // Display all data in JSON
    contact = locfunc.showJSON();
    res.render('contact', {
        name : 'Nathanure',
        title : 'Contact',
        layout : 'layout/html',
        contact
    });
})
app.use('/', (req, res) => {
    res.status(404)
    res.render('error', {
        layout : 'layout/error'
    });
})

app.listen(port, () => {
    console.log(`Example app on port ${(port)}`)
})