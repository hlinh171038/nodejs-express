var shortid= require('shortid');

var db =  require('../views/users/db');
//module.exports = {
//    a:1,
//    b:2
//}
//module.exports.a = 1;
//module.exports.b=2;

module.exports.index = function(require,response){
    response.render('users/index',{
        users:db.get('users').value()
    }); 
};
module.exports.search = function(req,res){
    var q = req.query.q; // vì req.query ==>{q:"inh"} -> .q(key)
    var usermark = db.get('users').filter(function(user){
       return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    }).write();
    res.render('users/index',{
        users:usermark
    })
};
module.exports.create = function(req, res){
    res.render('users/create'); //render khong co dau gach /
};
module.exports.postCreate = function(req , res){
    req.body.id = shortid.generate();      // thư viện shortid tạ ra id ngẫu nhiên
    db.get('users').push(req.body).write();   // method của request lấy nội dung post
    res.redirect('/users') // method của response ddeew chuyển hướng
};
module.exports.get = function(req, res){
    var id = req.params.userId;
    //console.log(typeof id);
    var user =  db.get('users').find({id: id}).value();
    //console.log(user);
    res.render('users/view',{
       user:user
    })
};