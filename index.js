require('dotenv').config();

var express= require('express');
var cookieParser = require('cookie-parser')

var userRoute = require('./routes/user-router');
var cartRoute = require('./routes/cart-route');
var authRoute = require('./routes/auth-route');
var productRoute = require('./routes/product-route');
var tranferRoute = require('./routes/tranfer-route');

var authController = require('./middleware/auth-middleware'); 
var cookieMiddleware = require('./validate/cookie-middleware');

var app = express();
var port =3000;
app.use(express.static('public'))
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(cookieMiddleware)

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
app.use('/cart', cartRoute);
app.use('/product',authController.middleware,productRoute);
app.use('/tranfer',tranferRoute);
app.listen(port, function(){
     console.log('Server listenning on port'+port);
});