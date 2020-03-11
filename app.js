const express = require('express')
var handlebars  = require('express-handlebars');
 
const app = express()

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// app.use('/public',express.static('public'));
app.use('/public', express.static( __dirname + '/public'));

app.get('/',(req,res) => {
    res.render('index')
})

app.listen(8000,function(){
    console.log("OI")
})
