var express = require ('express');
var app = express;


app.get('/todo/get',function(req, res,next));
res.send('/');
next();
