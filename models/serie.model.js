const mongoose = require('mongoose');
const {Schema} = mongoose;

const serieSchema = new Schema({
    images: [{type: String, required: true}],
    title: {type: String, required: true},
    categories: [{type: String, required: true}],
    episodes: {type: Number, required: true},
    year: {type: Number, required: true},
    plot: {type: String, required: true},
    user_score: [{
        email: {type: String, required: false, default: null},
        score: {type: Number, required: false, default: null}
    }]
});

module.exports = mongoose.model('Serie', serieSchema, 'series');