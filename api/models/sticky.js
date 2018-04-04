'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for sticky object.
 */
let StickySchema = new Schema({
    /**
     * Title of the sticky.
     */
    title: {
        type: String,
        required: "title is required"
    },
    /**
     * Sticky created date.
     */
    created_date: {
        type: Date,
        default: Date.now
    },
    /**
     * Sticky content.
     */
    content: {
        type: String
    },
    /**
     * Last modified date.
     */
    modified_date: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('stickies', StickySchema);