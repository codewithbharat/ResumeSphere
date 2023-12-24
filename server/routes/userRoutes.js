const router = require('express').Router();

const authMiddleware = require('../middlewares/authMiddleware');
const { updateUser, getUserByID } = require('../controllers/userController');

const { addEducation, deleteEducation } = require('../controllers/educationController');
const { addExperience, deleteExperience } = require('../controllers/experienceController');
const { addSkill, deleteSkill } = require('../controllers/skillController');
const { addProject, deleteProject } = require('../controllers/projectController');

// User routes
router.put('/update-user', authMiddleware, updateUser);
router.get('/:user_id', authMiddleware, getUserByID);

// Education routes
router.post('/:user_id/education', authMiddleware, addEducation);
router.delete('/:user_id/education/:education_id', authMiddleware, deleteEducation);

// Experience routes
router.post('/:user_id/experience', authMiddleware, addExperience);
router.delete('/:user_id/experience/:experience_id', authMiddleware, deleteExperience);


// Skill routes
router.post('/:user_id/skill', authMiddleware, addSkill);
router.delete('/:user_id/skill/:skill_id', authMiddleware, deleteSkill);

// Project routes
router.post('/:user_id/project', authMiddleware, addProject);
router.delete('/:user_id/project/:project_id', authMiddleware, deleteProject);

module.exports = router;
