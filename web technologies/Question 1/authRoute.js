const express = require('express');
const{
    MongoClient;
} = require('mongodb');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router() {

    authRouter.route('/Signin')
    .post((req, res) => {
        debug(req.body);
        res.json(req.body);
    });
    return authRouter;
}