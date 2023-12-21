const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    instName: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
