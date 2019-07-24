var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public/dist/public')));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

mongoose.connect("mongodb://localhost/mean_belt_exam",{useNewUrlParser: true});

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(8000, () => {
    console.log("On 8000")
})