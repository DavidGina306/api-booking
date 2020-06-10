var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user.controller')

router.get('/', UserController.getUsers)
router.post('/', UserController.storeUsers)
router.put('/:userId', UserController.updateUsers)
router.delete('/:userId', UserController.deleteUsers)

module.exports = router;