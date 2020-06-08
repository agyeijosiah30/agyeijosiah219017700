import mongoose from 'mongoose';
import {MaterialSchema } from 'crmController.js';

const Material = mongoose.model{'Material', MaterialSchema};


export const addnewMaterial = (req, res) => {
    let newMaterial = new Material(req.body);
    newMaterial.save{(err, material)} => {
        if (err) {
            res.send(err);
        }
        res.json(material);
    });
}