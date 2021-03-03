const {response} = require('express')
const {validationResult} = require('express-validator')

const crearUsuario = (req,  resp = response)=>{
    const {name, email, password} = req.body;
    
    resp.status(201).json({
        ok:true,
        msg:'register',
        name,
        email,
        password
    })
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