const User = require('../models/userSchema');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const errorHandler = require('../middlewares/errorMiddleware');

// register user
const register = errorHandler(async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_KEY, {
        expiresIn: '7d',
    });

    res.status(201).json({ userId: newUser._id, token, user: newUser });
});

// login user
const login = errorHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.status(404).json({ message: 'User not Registerd' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        res.status(401).json({ message: 'Invalid Password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
        expiresIn: '7d',
    });

    res.status(200).json({ userId: user._id, token, user });

});


module.exports = { register, login };