var express = require('express')

var router = express.Router();

var controller = require('../controller/product-controller');
var validate = require('../validate/user-validate');


router.get('/',controller.product)
module.exports = router