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
    const resolve = (stickies) => {
        response.status(200);
        response.json(stickies);
    };
    stickyService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new sticky with the request JSON and
 * returns sticky JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newSticky = Object.assign({}, request.body);
    const resolve = (sticky) => {
        response.status(200);
        response.json(sticky);
    };
    stickyService.save(newSticky)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a sticky object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (sticky) => {
        response.status(200);
        response.json(sticky);
    };
    stickyService.get(request.params.stickyId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a sticky object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const sticky = Object.assign({}, request.body);
    const resolve = (sticky) => {
        response.status(200);
        response.json(sticky);
    };
    sticky._id = request.params.stickyId;
    stickyService.update(sticky)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a sticky object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (sticky) => {
        response.status(200);
        response.json({
            message: 'Sticky Successfully deleted'
        });
    };
    stickyService.delete(request.params.stickyId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};