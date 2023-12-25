const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    associated: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
    },
    description: {
        type: String,
    },
    currentlyworking: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Project', ProjectSchema);