var express = require ('express');
var app = express;


app.delete('/todo/delete',function(req, res,next));
res.send('/');
next();
