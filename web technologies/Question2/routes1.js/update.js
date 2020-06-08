var express = require('express');
var app = express();


app.put('/', function(req, res){
    res.send('new material')
});
const routes = (app) => {
    app.route('/Material')
       .update((req,res,next) => {
           console.log('Request from: ${req.originalUrl'} }
           console.log('Request type:${req.method}'}
           next();
       },updateMaterials)

       .update(addnewMaterial);

       app.routes('/material/:material')
    });