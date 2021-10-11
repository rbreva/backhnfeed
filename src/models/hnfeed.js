const mongoose = require("mongoose");

const hnfeedSchema = mongoose.Schema({
    objectID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    story_title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    story_url: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("hnfeed", hnfeedSchema);