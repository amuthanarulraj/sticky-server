/**
 * Service for sticky operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Sticky = mongoose.model('Stickies');

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
    Sticky.find(params, function (err, stickies) {
        throwError(err);
        callback(stickies);
    });
};

/**
 * Saves and returns the new sticky object.
 *
 * @param {Object} sticky {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.save = function (sticky, callback) {
    let newSticky = new Sticky(sticky);
    newSticky.save(function (err, sticky) {
        throwError(err);
        callback(sticky);
    });
};

/**
 * Returns the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.get = function (stickyId, callback) {
    Sticky.findById(stickyId, function (err, sticky) {
        throwError(err);
        callback(sticky);
    });
};

/**
 * Updates and returns the sticky object.
 *
 * @param {Object} sticky {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.update = function (sticky, callback) {
    sticky.modified_date = new Date();
    Sticky.findOneAndUpdate({
        _id: sticky._id
    }, sticky, {
        new: true
    }, function (err, sticky) {
        throwError(err);
        callback(sticky);
    });
};

/**
 * Deletes the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.delete = function (stickyId, callback) {
    Sticky.remove({
        _id: stickyId
    }, function (err, task) {
        callback();
    });
};