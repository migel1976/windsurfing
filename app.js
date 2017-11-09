var express=require('express');
var app=express();

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
   res.render('index');
});

app.get('/about',function(req,res){
    res.render('about');
});

const listenPort=3000;
var server=app.listen(listenPort,function()
        {console.log('Сервер запущен и слушает порт ' + listenPort);
});