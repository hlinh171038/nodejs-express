var express = require('express')
var router = express.Router();
var controller = require('../controller/tranfer-controller');
var validate = require('../validate/user-validate');
const { route } = require('./cart-route');


router.get('/create',controller.create);
router.post('/create', controller.postCreate)
module.exports = router