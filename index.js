var express= require('express');
var app = express();
var port =3000;
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/',function(request, response){
    response.render('index',{
        name:'AAAA'
    });
});
app.get('/users',function(require,response){
    response.render('users/index',{
        users:[
            {id: '1' , name:'Thinh'},
            {id:'2' , name:'Linh'}
        ]
    }); 
});
app.listen(port, function(){
     console.log('Server listenning on port'+port);
});