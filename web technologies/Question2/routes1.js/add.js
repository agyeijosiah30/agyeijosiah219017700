var express = require('express');
var app = express();

app.post('/', function(req, res){
    res.send('new material')
});

const routes = (app) => {
    app.route('/Material')
       .post((req,res,next) => {
           console.log('Request from: ${req.originalUrl'} }
           console.log('Request type:${req.method}'}
           next();
       },postMaterials)

       .post(addnewMaterial);

       app.routes('/material/:material')

       
}
