var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Project', new Schema({
    name: String,
    purpose: String,
    technologies: String,
    screenshot: [String],
}));