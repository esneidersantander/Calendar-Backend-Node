const {response, request} = require('express');
const {generarJWT} = require('../helpers/jwt');
const Evento = require('../models/Evento');


const getEventos= async (req, resp = response)=>{
    const eventos = await Evento.find()
                                .populate('user', 'name')



    resp.json({
        ok:true,
        msg:eventos
    })
}
const crearEvento= async (req, resp = response)=>{

    const evento = new Evento(req.body);
    try {

        evento.user = req.uid

        const eventoGuardado = await evento.save();
        resp.json({
            ok:true,
            evento:eventoGuardado
        })
    } catch (error) {
        resp.status(500).json({
            ok:false,
            msg: "Hable con el adminsitrador"
        })
    }

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