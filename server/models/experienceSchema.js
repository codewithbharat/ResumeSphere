const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    locationType: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    currentlyWorking: {
        type: Boolean,
        default: false,
    },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
