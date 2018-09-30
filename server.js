var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

require('babel/register');

var internalValues = [];

//TODO: Store state
//TODO: Make priority enums

// Display todos
app.get('/', function(request, response) {
    //TODO Check logged in and redirect to register page
    response.render('index', {data: internalValues});
});

// Display new todo form
app.route('/new')
    .get(function(request, response) { response.render('new', {error: request.cookies.error}); })
    .post(function(request, response) {
        // Post new todo to MongoDB and redirect
        // TODO: MongoDB Integration
        // TODO: Validate & sanitize data
        if(validateValue(request.body.name, 'name', response)) { response.redirect(400, '/new'); return; }
        if(validateValue(request.body.priority, 'priority', response)) { response.redirect(400, '/new'); return; }

        internalValues.push(
            {
                name: request.body.name,
                checked: false,
                priority: request.body.priority,
                dueDate: request.body.dueDate
            }
        );
        response.status(200).redirect('/');
    });


app.route('/register')
    .get(function(request, response) {
        // Display new account form
    }).post(function(request, response) {
        // Create new account for DB
    });


app.route('/login')
    .get(function(request, response) {
        // Display login page
    }).post(function(request, response) {
        // Log in
    });

app.listen(3000, function() {
    console.log('The server has respectfully been launched at localhost:3000, sir')
});

function validateValue(value, name, response) {
    if(value == null || value == '') {
        var error = 'Missing: ' + name;
        console.log(error);
        response.cookie('error', error);
        return true;
    }
    return false;
}


// Exports for testing
module.exports = app;