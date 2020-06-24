var express= require('express');
var app = express();
var port =3000;
app.set('view engine', 'pug');
app.set('views', './views');
var users= [
    {id: '1' , name:'Thinh'},
    {id:'2' , name:'Linh'}
]
app.get('/',function(request, response){
    response.render('index',{
        name:'AAAA'
    });
});
app.get('/users',function(require,response){
    response.render('users/index',{
        users:users
    }); 
});
app.get('/users/search',function(req,res){
    var q = req.query.q; // vì req.query ==>{q:"inh"} -> .q(key)
    var usermark = users.filter(function(user){
       return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    });
    res.render('users/index',{
        users:usermark
    })
})
app.listen(port, function(){
     console.log('Server listenning on port'+port);
});