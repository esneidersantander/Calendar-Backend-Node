const {response, request} = require('express');
const {generarJWT} = require('../helpers/jwt');
const { findById } = require('../models/Evento');
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
const actualizarEvento= async(req, resp = response)=>{

    const eventoId = req.params.id
    const uid = req.uid;

    try {
        
        const evento  = await Evento.findById(eventoId);
        if (!evento) {
            resp.status(404).json({
                ok:false,
                msg:'Evento no existe con ese Id'
            })
        }

        if (evento.user.toString() !== uid) {
            return resp.status(401).json({
                ok:false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }
        const nuevoEvento = {
            ...req.body,
            user:uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new:true});
        resp.json({
            ok:true,
            evento:eventoActualizado
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok:false,
            msg: "Hable con el adminsitrador"
        })
    }
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