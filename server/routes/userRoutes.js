const router = require('express').Router();

const authMiddleware = require('../middlewares/authMiddleware');
const { updateUser } = require('../controllers/userController');

router.put('/update-user', authMiddleware, updateUser);

module.exports = router;
