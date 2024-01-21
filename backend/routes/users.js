const express = require('express');

const { loginUser, singUpUser } = require('../controllers/userController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/singup', singUpUser);

module.exports = router;