/**
 * Sticky endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const stickyController = require('../controllers/sticky-controller');
    // Sticky Routes for search and create.
    app.route('/stickies')
        .get(stickyController.list)
        .post(stickyController.post);

    // Sticky Routes for get, update and delete.
    app.route('/stickies/:stickyId')
        .get(stickyController.get)
        .put(stickyController.put)
        .delete(stickyController.delete);
};