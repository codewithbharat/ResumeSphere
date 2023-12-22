const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        default: '',
    },
    phone: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },
    linkedin: {
        type: String,
        default: '',
    },
    twitter: {
        type: String,
        default: '',
    },
    github: {
        type: String,
        default: '',
    },
    instagram: {
        type: String,
        default: '',
    },
    website: {
        type: String,
        default: '',
    },
    education: [{ type: Schema.Types.ObjectId, ref: 'Education' }],
    experience: [{ type: Schema.Types.ObjectId, ref: 'Experience' }],
});


// Hash Password
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        return next();
    });
});

module.exports = mongoose.model('User', userSchema);
