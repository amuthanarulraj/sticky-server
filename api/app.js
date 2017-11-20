'use strict';
module.exports = function (app) {
    //Initialize models
    let stickyModel = require('./models/sticky');

    //Initialize routes
    let stickyRoutes = require('./routes/sticky-route');
    stickyRoutes(app);
};