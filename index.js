const express = require ('express');


//crear el servidor de express
const app = express();

//rutas
app.get('/',(req, resp)=>{
    resp.json({
        ok:true
    })
})


//escruchar peticiones
app.listen(4000, ()=>{
    console.log('Servidor corriendo en puerto 4000');
})