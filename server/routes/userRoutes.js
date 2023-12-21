const router = require('express').Router();

const authMiddleware = require('../middlewares/authMiddleware');
const { updateUser, getUserByID } = require('../controllers/userController');

const { addEducation, deleteEducation } = require('../controllers/educationController');

// User routes
router.put('/update-user', authMiddleware, updateUser);
router.get('/:user_id', authMiddleware, getUserByID);

// Education routes
router.post('/:user_id/education', authMiddleware, addEducation);
router.delete('/:user_id/education/:education_id', authMiddleware, deleteEducation);

module.exports = router;
