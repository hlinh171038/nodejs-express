var db =  require('../views/users/db');


module.exports.product = function(req, res, next){
    var page = parseInt(req.query.page) || 1 ; // n
    var perpage = 8; //x
    var count = 2;
    var start = (page -1)*perpage;
    var end = page*perpage;
    res.render('products/product',{
        products: db.get('product').value().slice(start,end),
        count:count
    }); 
}