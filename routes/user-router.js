var express = require('express')
var router = express.Router();

var controller = require('../controller/user-controller');
var validate = require('../validate/user-validate');

router.get('/',controller.index);
router.get('/search',controller.search)
router.get('/create',controller.create );
router.post('/create',validate.validatePostCard,controller.postCreate);
router.get('/:userId', controller.get)
module.exports = router;