const { model, Schema } = require('mongoose');

const EjericicioRealizadoSchema = Schema(
    {
        idtipoejercicio: {
            type: String,
            required:false
        },
        iddeportista: {
            type: String,
            required:false
        },
        fecha:{
            type: String,
            required: true        
        },
        hora:{
            type: String,
            required:true
        },
        tiempo:{
            type: String,
            required:true
        },
        caloriasquemadas:{
            type:String,
            required:true
        }
    }
);

EjericicioRealizadoSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('EjercicioRealizado', EjericicioRealizadoSchema );