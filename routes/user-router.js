var express = require('express')
var multer  = require('multer')
var router = express.Router();

var controller = require('../controller/user-controller');
var validate = require('../validate/user-validate');
var authController = require('../middleware/auth-middleware');

var upload = multer({ dest: './public/uploads/' })

router.get('/',authController.middleware,controller.index);
router.get('/cookie', function(req,res,next){
    console.log(req.cookies);
    res.cookie('users-id', 12345);
    res.send('hello')
})
router.get('/search',controller.search)
router.get('/create',controller.create );
router.post('/create',upload.single('avatar'),validate.validatePostCard,controller.postCreate);
router.get('/product',controller.pro);
router.get('/:userId', controller.get);

module.exports = router;