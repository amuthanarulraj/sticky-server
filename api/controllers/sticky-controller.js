/**
 * Controller for sticky endpoints.
 */

'use strict';
//import sticky service.
const stickyService = require('../services/sticky-service');

/**
 * Returns a list of stickies in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    stickyService.search({}, function (stickies) {
        response.status(200);
        response.json(stickies);
    });
};

/**
 * Creates a new sticky with the request JSON and
 * returns sticky JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    let newSticky = Object.assign({}, request.body);
    stickyService.save(newSticky, function (sticky) {
        response.json(sticky);
    });
};

/**
 * Returns a sticky object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    stickyService.get(request.params.stickyId, function (sticky) {
        response.json(sticky);
    });
};

/**
 * Updates and returns a sticky object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    let sticky = Object.assign({}, request.body);;
    sticky._id = request.params.stickyId;
    stickyService.update(sticky, function (sticky) {
        response.json(sticky);
    });
};

/**
 * Deletes a sticky object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    stickyService.delete(request.params.stickyId, function (sticky) {
        response.json({
            message: 'Sticky Successfully deleted'
        });
    });
};