const {response} = require('express');
const {generarJWT} = require('../helpers/jwt');

const getEventos=(req, resp = response)=>{
    resp.json({
        ok:true,
        msg:'geteventops'
    })
}
const crearEvento=(req, resp = response)=>{

    //verificar que tenga el evento
    console.log(req.body);

    resp.json({
        ok:true,
        msg:'crear eventos'
    })
}
const actualizarEvento=(req, resp = response)=>{
    resp.json({
        ok:true,
        msg:'actualizar eventos'
    })
}
const eliminarEvento=(req, resp = response)=>{
    resp.json({
        ok:true,
        msg:'eliminar eventos'
    })
}



module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}