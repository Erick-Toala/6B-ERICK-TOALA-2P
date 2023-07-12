const { model, Schema } = require('mongoose');

const DeportistaSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del Deportista es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        peso:{
            type: Number,
            default:0
        },
        altura:{
            type:Number,
            default:0
        },
        edad:{
            type:Number,
            default:0
        }
    }
);

DeportistaSchema.methods.toJSON = function(){
    const { __v,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Deportista', DeportistaSchema );