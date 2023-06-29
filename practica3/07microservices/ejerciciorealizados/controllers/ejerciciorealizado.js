const { response } = require('express')
const { EjercicioRealizado } = require('../models')


const getEjercicioRealizados= async (req, res = response )=>{
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, ejerciciorealizados ] = await Promise.all([
        EjercicioRealizado.countDocuments(query),
        EjercicioRealizado.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      ejerciciorealizados
    })
    
}
const getEjercicioRealizado= async (req, res =  response)=>{
    const {id} = req.params
    const ejerciciorealizado=  await EjercicioRealizado.findById(id)
    res.json(ejerciciorealizado);
}

const createEjercicioRealizado= async (req, res = response)=>{
    const { status, ...body } =  req.body;
    
    const existEjercicioRealizado =  await EjercicioRealizado.findOne({body})

    if (existEjercicioRealizado)
    {
        return res.status(400).json({
            msg:`El producto ${ existEjercicioRealizado.name } ya existe`
        })
    }

    const data = {
        ...body    }

    const ejerciciorealizado = new EjercicioRealizado(data);

    const newEjercicioRealizado =  await ejerciciorealizado.save();
    res.status(201).json(newEjercicioRealizado);
}
const updateEjercicioRealizado= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedEjercicioRealizado =  await EjercicioRealizado.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedEjercicioRealizado);
}
const deleteEjercicioRealizado= async (req, res = response)=>{
    const {id} = req.params;
    const deletedEjercicioRealizado =  await EjercicioRealizado.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedEjercicioRealizado);
}

module.exports = {
    getEjercicioRealizado,
    getEjercicioRealizados,
    createEjercicioRealizado,
    updateEjercicioRealizado,
    deleteEjercicioRealizado
};