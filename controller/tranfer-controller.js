var db = require('../views/users/db');
var shortid= require('shortid');

module.exports.create = function(req, res, next){
    res.render('tranfer/create');
}
module.exports.postCreate = function(req, res, next){
    var data={
        id:shortid.generate(),
        tien:parseInt(req.body.tien)
    }
    
   db.get('tranfer').push(data).write();
   res.redirect('/tranfer/create');
}