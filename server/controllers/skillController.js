const User = require('../models/userSchema');
const Skill = require('../models/skillSchema')
const errorHandler = require('../middlewares/errorMiddleware');

// Create skill record for a user
const addSkill = errorHandler(
    async (req, res) => {
        const { user_id } = req.params;
        const { skill, proficiency } = req.body;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a new skill document
        const newSkill = new Skill({
            skill,
            proficiency
        });

        // Save the skill document
        await newSkill.save();

        // Ensure 'user.skill' is initialized as an array
        user.skill = user.skill || [];

        // Add the ObjectId of the new skill document to the user's skill array
        user.skill.push(newSkill._id);

        // Save the updated user document
        await user.save();

        res.status(201).json({ message: 'Skill added successfully' });

    }

);



// Delete skill record for a user
const deleteSkill = errorHandler(async (req, res) => {
    const { user_id, skill_id } = req.params;

    const user = await User.findById(user_id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }


    // Find skill and delete it
    const skill = await Skill.findById(skill_id);

    if (!skill) {
        return res.status(404).json({ error: 'Skill not found' });
    }

    // Remove the skill ObjectId from the user's skill array
    user.skill.pull(skill_id);

    // Save the updated user document before removing the skill record
    await user.save();

    // Remove the skill record
    await skill.deleteOne();

    res.status(200).json({ message: 'Skill deleted successfully' });

});


module.exports = { addSkill, deleteSkill };