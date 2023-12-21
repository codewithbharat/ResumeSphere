const User = require('../models/userSchema');
const Education = require('../models/educationSchema')
const errorHandler = require('../middlewares/errorMiddleware');

// Create education record for a user
const addEducation = errorHandler(
    async (req, res) => {
        const { user_id } = req.params;
        const { instName, course, degree, grade, startDate, endDate } = req.body;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a new education document
        const newEducation = new Education({
            instName,
            course,
            degree,
            grade,
            startDate,
            endDate,
        });

        // Save the education document
        await newEducation.save();

        // Ensure 'user.education' is initialized as an array
        user.education = user.education || [];

        // Add the ObjectId of the new education document to the user's education array
        user.education.push(newEducation._id);

        // Save the updated user document
        await user.save();

        res.status(201).json({ message: 'Education added successfully' });
    }
);

// Delete education record for a user
const deleteEducation = errorHandler(async (req, res) => {
    const { user_id, education_id } = req.params;

    const user = await User.findById(user_id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Find education and delete it
    const education = await Education.findById(education_id);

    if (!education) {
        return res.status(404).json({ error: 'Education not found' });
    }

    // Remove the education ObjectId from the user's education array
    user.education.pull(education_id);

    // Save the updated user document before removing the education record
    await user.save();

    // Check if education is not null before attempting to remove
    if (education) {
        await education.deleteOne();
        res.json({ message: 'Education deleted successfully' });
    } else {
        res.status(404).json({ error: 'Education not found' });
    }
});


module.exports = { addEducation, deleteEducation };
