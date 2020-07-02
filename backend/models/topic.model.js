const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true,
        minlength: 5,
    },
    description: { type: String, },
    date: { type: Date, required: true },
}, {
    timestamps: true
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;