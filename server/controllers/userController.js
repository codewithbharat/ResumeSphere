const User = require('../models/userSchema');
const errorHandler = require('../middlewares/errorMiddleware');
// update user

const getUserByID = errorHandler(async (req, res) => {
    const { user_id } = req.params;

    const user = await User.findById(user_id).populate('education').populate('experience').populate('skill').populate('project');

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ user });
})

const updateUser = errorHandler(async (req, res) => {
    const userData = req.body;

    // Find the user by email
    let updatedUser = await User.findOne({ email: userData.email });

    if (!updatedUser) {
        return res.status(404).json({ message: 'User not Registered' });
    }

    // Update user data
    updatedUser.set(userData);

    // Save the updated user
    await updatedUser.save();

    res.status(201).json({ user: updatedUser });
})


module.exports = { updateUser, getUserByID };