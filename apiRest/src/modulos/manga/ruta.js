const express = require ('express');

const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador = require('./index');



//select

    const todos = async (req, res, next) =>{
        try{
            const items= await controlador.todos();
            respuesta.success(req,res,items,200);

        }catch(err){
            next(err);
        }
    }
   
    //select id
  const uno = async (req, res,next) =>{
    try{
    const items = await controlador.uno(req.params.id);
      respuesta.success(req,res,items, 200);
    }catch(err){
  
      next(err);
    }
     
  }
  // insert
  const agregar = async (req, res, next) =>{
    try{
    const items = await controlador.agregar(req.body);
      respuesta.success(req,res, "Se ha insertado un registro", 200);
    }catch(err){
     
      next(err);
    }
     
  }

 //actualizar

 const actualizar = async (req, res, next)=>{
    try{
        const items = await controlador.actualizar(req.params.id, req.body)
        respuesta.success(req, res, "se actualiza un registro", 200);
        
    }catch(err){
        next(err);
    }

 }


  // delete

  const eliminar = async (req, res, next)=>{
    try{
        const items = await controlador.eliminar(req.params.id);
        respuesta.success(req,res,items,200);

    }catch(err){
        next(err)
    }
  }

  
  
    
    // rutas 
    router.get('/',todos);
    router.get('/:id', uno);
    router.post('/', agregar);
    router.put("/:id", actualizar);
    router.delete('/:id', eliminar);
   

    module.exports = router;