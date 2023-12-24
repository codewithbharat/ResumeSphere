const User = require('../models/userSchema');
const Project = require('../models/projectSchema');
const errorHandler = require('../middlewares/errorMiddleware');

// Create project record for a user
const addProject = errorHandler(async (req, res) => {
    const { user_id } = req.params;
    const { projectName, associated, startDate, endDate, description, currentlyworking } = req.body;

    const user = await User.findById(user_id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Create a new project document
    const newProject = new Project({
        projectName,
        associated,
        startDate,
        endDate,
        description,
        currentlyworking,
    });

    // Save the project document
    await newProject.save();

    // Ensure 'user.projects' is initialized as an array
    user.projects = user.projects || [];

    // Add the ObjectId of the new project document to the user's projects array
    user.projects.push(newProject._id);

    // Save the updated user document
    await user.save();

    res.status(201).json({ message: 'Project added successfully' });
});

// Delete project record for a user
const deleteProject = errorHandler(async (req, res) => {
    const { user_id, project_id } = req.params;

    const user = await User.findById(user_id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Find project and delete it
    const project = await Project.findById(project_id);

    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }

    // Remove the project ObjectId from the user's projects array
    user.projects.pull(project_id);

    // Save the updated user document before removing the project record
    await user.save();

    // Check if project is not null before attempting to remove
    if (project) {
        await project.deleteOne();
        res.json({ message: 'Project deleted successfully' });
    } else {
        res.status(404).json({ error: 'Project not found' });
    }
});

module.exports = { addProject, deleteProject };