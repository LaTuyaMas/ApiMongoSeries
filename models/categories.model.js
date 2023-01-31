const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorieSchema = new Schema({
    name: {type: String, required: true},
    icon: {type: String, required: true}
});

module.exports = mongoose.model('Categorie', categorieSchema, 'categories');