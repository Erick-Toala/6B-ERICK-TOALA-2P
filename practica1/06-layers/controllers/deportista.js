const { response } = require('express');
const { Deportista } = require('../models');


const getDeportistas = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, deportistas ] = await Promise.all([
        Deportista.countDocuments(query),
        Deportista.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      deportistas
    })
}

const getDeportista = async (req, res= response)=>{
    const {id} = req.params
    const deportista=  await Deportista.findById(id);
    res.json(deportista);
}

const createDeportista = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existDeportista =  await Deportista.findOne({nombre: body.nombre})

    if (existDeportista)
    {
        return res.status(400).json({
            msg:`El deportista ${ existDeportista.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre
    }

    const deportista = new Deportista(data);

    const newDeportista =  await deportista.save();
    res.status(201).json(newDeportista);
}

const updateDeportista = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const deportistaUpdated =  await Deportista.findByIdAndUpdate(id,data, {new: true} )
    res.json(deportistaUpdated);
}

const deleteDeportista =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedDeportista =  await Deportista.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedDeportista);
}

 module.exports ={
    createDeportista,
    getDeportista,
    getDeportistas,
    updateDeportista,
    deleteDeportista
 }