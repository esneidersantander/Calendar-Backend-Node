const {response} = require('express')

const crearUsuario = (req,  resp = response)=>{
    resp.json({
        ok:true,
        msg:'register'
    })
}

const loginUsuario = (req, resp= response)=>{
    resp.json({
        ok:true,
        msg:'login'
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