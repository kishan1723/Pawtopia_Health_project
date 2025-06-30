const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const userModel = require('../models/User');
const { validateUserRegistration } = require('../middlewares/validationMiddleware');


router.post('/register', register);
router.post('/register', validateUserRegistration, register);
router.post('/login', login);

router.get('/read', async (req, res) => {
  try {
    let readeuser = await userModel.find();
    res.send(readeuser);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;