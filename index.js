var express= require('express');
var low = require('lowdb');
var shortid= require('shortid');
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
    res.render('users/create'); //render khong co dau gach /
});
app.post('/users/create',function(req , res){
    req.body.id = shortid.generate();      // thư viện shortid tạ ra id ngẫu nhiên
    db.get('users').push(req.body).write();   // method của request lấy nội dung post
    res.redirect('/users') // method của response ddeew chuyển hướng
});
app.get('/users/:userId', function(req, res){
    var id = req.params.userId;
    //console.log(typeof id);
    var user =  db.get('users').find({id: id}).value();
    //console.log(user);
    res.render('users/view',{
       user:user
    })
})
app.listen(port, function(){
     console.log('Server listenning on port'+port);
});