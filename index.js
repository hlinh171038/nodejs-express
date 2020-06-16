var express= require('express');
var app = express();
var port =3000
app.get('/',function(request, response){
    response.send('<h1>Hello coderx.tokio</h1>');
});
app.get('/user',function(require,response){
    response.send('user day');
})
app.listen(port, function(){
     console.log('Server listenning on port'+port);
});