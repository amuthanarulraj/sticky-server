let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/stickyDB', { useMongoClient: true });
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Stickies RESTful API server started on: ' + port);