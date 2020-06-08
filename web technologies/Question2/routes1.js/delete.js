var express = require('express');
var app = express();



app.delete('/', function(req, res){
    res.send('new material')
});
const routes = (app) => {
    app.route('/Material')
       .delete((req,res,next) => {
           console.log('Request from: ${req.originalUrl'} }
           console.log('Request type:${req.method}'}
           next();
       },deleteMaterials)

       .delete(addnewMaterial);

       app.routes('/material/:material')

    });