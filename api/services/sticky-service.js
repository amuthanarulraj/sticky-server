/**
 * Service for sticky operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Sticky = mongoose.model('stickies');

/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

/**
 * Returns an array of sticky object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
exports.search = function (params, callback) {
    let resultCallback = function (err, stickies) {
        throwError(err);
        callback(stickies);
    };
    Sticky.find(params, resultCallback);
};

/**
 * Saves and returns the new sticky object.
 *
 * @param {Object} sticky {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.save = function (sticky, callback) {
    let newSticky = new Sticky(sticky),
        resultCallback = function (err, sticky) {
            throwError(err);
            callback(sticky);
    };
    newSticky.save(resultCallback);
};

/**
 * Returns the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.get = function (stickyId, callback) {
    let resultCallback = function (err, sticky) {
        throwError(err);
        callback(sticky);
    };
    Sticky.findById(stickyId, resultCallback);
};

/**
 * Updates and returns the sticky object.
 *
 * @param {Object} sticky {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.update = function (sticky, callback) {
    let resultCallback = function (err, sticky) {
        throwError(err);
        callback(sticky);
    };
    sticky.modified_date = new Date();
    Sticky.findOneAndUpdate({
        _id: sticky._id
    }, sticky, {
        new: true
    }, resultCallback);
};

/**
 * Deletes the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.delete = function (stickyId, callback) {
    let resultCallback = function (err, sticky) {
        throwError(err);
        callback();
    };
    Sticky.remove({
        _id: stickyId
    }, resultCallback);
};