var express= require('express');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = low(adapter);
var app = express();
var port =3000;
db.defaults({ users: []})
  .write()
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',function(request, response){
    response.render('index',{
        name:'AAAA'
    });
});
app.get('/users',function(require,response){
    response.render('users/index',{
        users:db.get('users').value()
    }); 
});
app.get('/users/search',function(req,res){
    var q = req.query.q; // vì req.query ==>{q:"inh"} -> .q(key)
    var usermark = db.get('users').filter(function(user){
       return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    }).write();
    res.render('users/index',{
        users:usermark
    })
})
app.get('/users/create', function(req, res){
    res.render('users/create');
});
app.post('/users/create',function(req , res){
    db.get('users').push(req.body).write();   // method của request lấy nội dung post
    res.redirect('/users') // method của response ddeew chuyển hướng
});
app.listen(port, function(){
     console.log('Server listenning on port'+port);
});