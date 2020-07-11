var express= require('express');

var userRoute = require('./routes/user-router')
var app = express();
var port =3000;
app.use(express.static('public'))

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',function(request, response){
    response.render('index',{
        name:'AAAA'
    });
});


app.use('/users', userRoute );
app.listen(port, function(){
     console.log('Server listenning on port'+port);
});