module.exports.validatePostCard = function(req,res,next){
    var errors =[];
    if(!req.body.name)
    {
        errors.push("name is requested");
    }
    if(!req.body.phone)
    {
        errors.push("phone is requested");
    }
    if(errors.length>0)
    {
        res.render('users/create',{
            errors:errors,
            value :req.body,
        });
        
        return;
    }
    next();
}