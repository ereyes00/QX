var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Sprint', new Schema({
    duration: String,
    sprintGoal: String,
    frontTasks: [String],
    backTasks: [String],
    backlog: [String],
}));