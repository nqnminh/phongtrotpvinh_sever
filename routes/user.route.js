const express = require('express');
const router = express.Router();
const controller = require ('../controllers/user.controller');
const middleware= require('../middlewares/token.middleware')

router.get('/', middleware.verifyToken , controller.index);

router.post('/signup', controller.signup);

router.post('/signin', controller.signin);

module.exports = router;
