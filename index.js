require('dotenv').config();

var express= require('express');
var cookieParser = require('cookie-parser')

var userRoute = require('./routes/user-router');
var authRoute = require('./routes/auth-route');



var authController = require('./middleware/auth-middleware'); 

var app = express();
var port =3000;
app.use(express.static('public'))
app.use(cookieParser(process.env.SESSION_SECRET))

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',function(request, response){
    response.render('index',{
        name:'AAAA'
    });
});


app.use('/users',authController.middleware, userRoute );
app.use('/auth', authRoute);

app.listen(port, function(){
     console.log('Server listenning on port'+port);
});