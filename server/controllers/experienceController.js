const User = require('../models/userSchema');
const Experience = require('../models/experienceSchema');
const errorHandler = require('../middlewares/errorMiddleware');

// Create experience record for a user
const addExperience = errorHandler(async (req, res) => {
    const { user_id } = req.params;
    const { companyName, position, location, locationType, startDate, endDate, description, currentlyWorking } = req.body;

    const user = await User.findById(user_id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Create a new experience document
    const newExperience = new Experience({
        companyName,
        position,
        location,
        locationType,
        startDate,
        endDate,
        description,
        currentlyWorking,
    });

    // Save the experience document
    await newExperience.save();

    // Ensure 'user.experience' is initialized as an array
    user.experience = user.experience || [];

    // Add the ObjectId of the new experience document to the user's experience array
    user.experience.push(newExperience._id);

    // Save the updated user document
    await user.save();

    res.status(201).json({ message: 'Experience added successfully' });
});

// Delete experience record for a user
const deleteExperience = errorHandler(async (req, res) => {
    const { user_id, experience_id } = req.params;

    const user = await User.findById(user_id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Find experience and delete it
    const experience = await Experience.findById(experience_id);

    if (!experience) {
        return res.status(404).json({ error: 'Experience not found' });
    }

    // Remove the experience ObjectId from the user's experience array
    user.experience.pull(experience_id);

    // Save the updated user document before removing the experience record
    await user.save();

    // Check if experience is not null before attempting to remove
    if (experience) {
        await experience.deleteOne();
        res.json({ message: 'Experience deleted successfully' });
    } else {
        res.status(404).json({ error: 'Experience not found' });
    }
});

module.exports = { addExperience, deleteExperience };
