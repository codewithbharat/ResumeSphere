const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true
    },
    proficiency: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true
    }
});

module.exports = mongoose.model('Skill', SkillSchema);