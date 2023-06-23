const { response } = require('express');
const { TipoEjercicio } = require('../models');


const getTipoEjercicios= async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, tipoejercicio ] = await Promise.all([
        TipoEjercicio.countDocuments(query),
        TipoEjercicio.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      tipoejercicio
    })
}

const getTipoEjercicio = async (req, res= response)=>{
    const {id} = req.params
    const tipoejercicio=  await TipoEjercicio.findById(id);
    res.json(tipoejercicio);
}

const createTipoEjercicio = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existTipoEjercicio =  await TipoEjercicio.findOne({tipo: body.tipo})

    if (existTipoEjercicio)
    {
        return res.status(400).json({
            msg:`El tipo de ejercicio ${ existTipoEjercicio.tipo } ya existe`
        })
    }

    const data = {
        ...body,
        tipo: body.tipo
    }

    const tipoejercicio = new TipoEjercicio(data);

    const newTipoEjercicio =  await tipoejercicio.save();
    res.status(201).json(newTipoEjercicio);
}

const updateTipoEjercicio = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const TipoEjercicioUpdated =  await TipoEjercicio.findByIdAndUpdate(id,data, {new: true} )
    res.json(TipoEjercicioUpdated);
}

const deleteTipoEjercicio =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedTipoEjercicio =  await TipoEjercicio.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedTipoEjercicio);
}

 module.exports ={
    createTipoEjercicio,
    getTipoEjercicio,
    getTipoEjercicios,
    updateTipoEjercicio,
    deleteTipoEjercicio
 }