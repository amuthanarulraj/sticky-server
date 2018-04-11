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
    let callback = function (stickies) {
        response.status(200);
        response.json(stickies);
    };
    stickyService.search({}, callback);
};

/**
 * Creates a new sticky with the request JSON and
 * returns sticky JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    let newSticky = Object.assign({}, request.body),
        callback = function (sticky) {
        response.status(200);
        response.json(sticky);
    };
    stickyService.save(newSticky, callback);
};

/**
 * Returns a sticky object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    let callback = function (sticky) {
        response.status(200);
        response.json(sticky);
    };
    stickyService.get(request.params.stickyId, callback);
};

/**
 * Updates and returns a sticky object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    let sticky = Object.assign({}, request.body),
        callback = function (sticky) {
        response.status(200);
        response.json(sticky);
    };
    sticky._id = request.params.stickyId;
    stickyService.update(sticky, callback);
};

/**
 * Deletes a sticky object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    let callback = function (sticky) {
        response.status(200);
        response.json({
            message: 'Sticky Successfully deleted'
        });
    };
    stickyService.delete(request.params.stickyId, callback);
};