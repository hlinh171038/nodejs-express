var db = require('../views/users/db')

module.exports.middleware = function(req,res,next){
   if(!req.signedCookies.userId)
   {
       res.redirect('/auth/login');
       return;
   }
   var user = db.get('users').find({id : req.signedCookies.userId}).value();
   if(!user){
       res.redirect('/auth/login');
       return;
   }
   res.locals.user =user;
   let sessionId = req.signedCookies.sessionId;
    res.locals.countCart =  Object.values(db.get("sessions")
                             .find({ id: sessionId })
                             .get("cart")
                             .size()
                             .value()).reduce((acc, cur) => acc + cur,1);
                            
    
   next();
}