/**
 * Service for sticky operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Sticky = mongoose.model('stickies');

/**
 * Returns an array of sticky object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Sticky.find(params).exec()
    return promise;
};

/**
 * Saves and returns the new sticky object.
 *
 * @param {Object} sticky {Sticky object}
 */
exports.save = function (sticky) {
    const newSticky = new Sticky(sticky);
    const promise = newSticky.save();
    return promise;
};

/**
 * Returns the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 */
exports.get = function (stickyId) {
    const promise = Sticky.findById(stickyId).exec();
    return promise
};

/**
 * Updates and returns the sticky object.
 *
 * @param {Object} sticky {Sticky object}
 */
exports.update = function (sticky) {
    sticky.modified_date = new Date();
    const promise = Sticky.findOneAndUpdate({_id: sticky._id}, sticky).exec();
    return promise;
};

/**
 * Deletes the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 */
exports.delete = function (stickyId) {
    const promise = Sticky.remove({_id: stickyId});
    return promise;
};