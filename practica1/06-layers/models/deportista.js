const { model, Schema } = require('mongoose');

const DeportistaSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del Deportista es necesario'],
            unique:true
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
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Deportista', DeportistaSchema );