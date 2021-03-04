const {response} = require('express')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const crearUsuario = async (req,  resp = response)=>{
    const {email, password} = req.body;

    try {
        let usuario = await Usuario.findOne({email})

        if (usuario) {
            return resp.status(400).json({
                ok:false,
                msg:'Un usuario ya existe con ese correo'
            })
        }
        usuario = new Usuario(req.body);

        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();
    
        resp.status(201).json({
            ok:true,
            uid: usuario.id,
            name:usuario.name
        })
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
}

const loginUsuario = (req, resp= response)=>{

    const {email, password} = req.body;

    resp.json({
        ok:true,
        msg:'login',
        email,
        password
    })
}
const revalidarToken = (req, resp= response)=>{
    resp.json({
        ok:true,
        msg:'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}