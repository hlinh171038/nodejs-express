var md5 = require('md5');

var db =  require('../views/users/db');

module.exports.login = function(req,res,next){
    res.render('auth/login'); 
}
module.exports.postLogin = function(req,res,next){
    var email =req.body.email;
    var password=req.body.password;
    var user = db.get('users').find({email:email}).value();
    if(!user)
    {
        res.render('auth/login',{
            errors: ['Email does not exists'],
            value:req.body
        });
        return; 
    }
    var hashPassword= md5(password);
    if(user.password !== hashPassword)
    {
        res.render('auth/login',{
            errors: ['wrong password'],
            value:req.body
        });
        return; 
    }
    res.cookie('userId',user.id,{
        signed:true
    });
    res.redirect('/users');

}