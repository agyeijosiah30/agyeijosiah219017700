import express from'express'
import routes from 'routes1.js';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import { prototype } from 'module';
 const app = express();
 const PORT = 3000;

 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost/(RMdb', {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 routes1(app);


 app.get('/',(req, res) =>
     res.send(Node and express server running on port ${PORT})

 };
 app.listen{PORT, () =>
    console.log('Your server is running on port ${PORT}')
};