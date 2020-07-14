var express = require('express')
var router = express.Router();

var controller = require('../controller/user-controller');
var validate = require('../validate/user-validate');
var authController = require('../middleware/auth-middleware');

router.get('/',authController.middleware,controller.index);
router.get('/cookie', function(req,res,next){
    console.log(req.cookies);
    res.cookie('users-id', 12345);
    res.send('hello')
})
router.get('/search',controller.search)
router.get('/create',controller.create );
router.post('/create',validate.validatePostCard,controller.postCreate);
router.get('/:userId', controller.get);

module.exports = router;