const { model, Schema } = require('mongoose');

const TipoEjercicioSchema = Schema(
    {
        tipo:{
            type: String,
            required: [ true, 'El nombre del ejercicio es necesario'],
            unique:true
        }
    }
);

TipoEjercicioSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('TipoEjercicio', TipoEjercicioSchema );