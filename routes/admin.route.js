var express = require('express');
const router = express.Router();
const controller = require ('../controllers/admin.controller')

router.get('/', controller.get);

module.exports = router;
