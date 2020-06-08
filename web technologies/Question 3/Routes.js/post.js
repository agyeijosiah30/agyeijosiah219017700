var express = require ('express');
var app = express;


app.post('/todo/post',function(req, res,next));
res.send('/');
next();
