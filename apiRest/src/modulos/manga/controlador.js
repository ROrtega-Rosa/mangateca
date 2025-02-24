const TABLA ='manga';

module.exports =(dbInyectada)=>{

    const db= dbInyectada;

    if(!db){
        db = resizeByrequire ('../../DB/mysql');
    }

    const todos = ()=>{
        return db.todos(TABLA)

    }

    const uno = (id) =>{
        return db.uno(TABLA, id);
    }
   

    const eliminar = (id)=>{
        return db.eliminar(TABLA,id)
    }

    const agregar =(body)=>{
        return db.agregar(TABLA, body);
    }

    const actualizar = (id, body)=>{
        return db.actualizar(TABLA, id, body);
    }

return {

    todos,
    uno,
    eliminar,
    agregar,
    actualizar
    
}

}