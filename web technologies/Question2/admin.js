const mongoose = require('mongoose');  

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser:true, useUnifiedTopology: true});

var material = mongoose.model('material', material);

var material = new material({material code:"123", material name:"iron rods", material unit price:20.5, material stock level:10.9});

material.save().then(() => console.log(material.json));


console.log(material);


});
