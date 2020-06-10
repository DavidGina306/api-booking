var express = require('express');
var router = express.Router();

var AuthController = require('../controllers/auth.controllers')

router.post('/sigin', AuthController.signIn)

module.exports = router;