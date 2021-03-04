const express = require ('express');
require('dotenv').config();
const {dbConnection} = require('./database/config')
//crear el servidor de express
const app = express();

//base de datos
dbConnection();

//directorio publico
app.use( express.static('public') );

//lectura y parse del body
app.use(express.json())

//rutas
app.use('/api/auth', require('./routes/auth'));


//escruchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})