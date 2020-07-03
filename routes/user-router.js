var express = require('express')
var router = express.Router();
var shortid= require('shortid');

var db = require('../views/users/db'); 

router.get('/',function(require,response){
    response.render('users/index',{
        users:db.get('users').value()
    }); 
});
router.get('/search',function(req,res){
    var q = req.query.q; // vì req.query ==>{q:"inh"} -> .q(key)
    var usermark = db.get('users').filter(function(user){
       return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    }).write();
    res.render('users/index',{
        users:usermark
    })
})
router.get('/create', function(req, res){
    res.render('users/create'); //render khong co dau gach /
});
router.post('/create',function(req , res){
    req.body.id = shortid.generate();      // thư viện shortid tạ ra id ngẫu nhiên
    db.get('users').push(req.body).write();   // method của request lấy nội dung post
    res.redirect('/users') // method của response ddeew chuyển hướng
});
router.get('/:userId', function(req, res){
    var id = req.params.userId;
    //console.log(typeof id);
    var user =  db.get('users').find({id: id}).value();
    //console.log(user);
    res.render('users/view',{
       user:user
    })
})
module.exports = router;