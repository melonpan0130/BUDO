var app = require('express')();
var http = require('http').Server(app);

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res)=> {
    res.render('test');
});

http.listen(3000, ()=> {
    console.log('Connect at 3000');
})