import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MaterialSchema = new Schema({
    material code: {
        type:String,
        required:'Enter a material code'
    },
    material name: {
        type: String,
        required:'Enter a material name'
    },
    material unit price:{
        type: Float,
        required:'Enter a material unit price'

    },
    material stock level:{
        type: Float,
        required:'Enter a material stock level'
    }
});