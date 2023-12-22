const router = require('express').Router();

const authMiddleware = require('../middlewares/authMiddleware');
const { updateUser, getUserByID } = require('../controllers/userController');

const { addEducation, deleteEducation } = require('../controllers/educationController');

const { addExperience, deleteExperience } = require('../controllers/experienceController');

// User routes
router.put('/update-user', authMiddleware, updateUser);
router.get('/:user_id', authMiddleware, getUserByID);

// Education routes
router.post('/:user_id/education', authMiddleware, addEducation);
router.delete('/:user_id/education/:education_id', authMiddleware, deleteEducation);

// Experience routes
router.post('/:user_id/experience', authMiddleware, addExperience);
router.delete('/:user_id/experience/:experience_id', authMiddleware, deleteExperience);


module.exports = router;
