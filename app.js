const dotenv = require('dotenv');
dotenv.config();
const express = require('express'); //Incorporamos express para relacionar las rutas del backend
const cors = require('cors'); //Incorporamos Cors para aceptar peticiones desde el navegador
const app = express(); //Iniciamos express
const port = process.env.PORT; //Agregamos el puerto ya sea manual o desde .env

const router = require('./routes/index'); //Agregamos todas las rutas del backend, 

app.use(cors()); //Le decimos al servidor que recibira peticiones http
app.use(router); //Le decimos al servidor que rutas contiene 

//Iniciamos el servidor, para que escuche por el puerto indicado y la ip que se indique o el por el locahost
app.listen(port, '0.0.0.0', () => {
    //Si no hay problemas se inicia el servidor correctamente.
    console.log('Servidor escuchando por el puerto: http://localhost:' + port,' O http://IP_SERVER:' + port);
}).on('error', err => {
    console.log('Error al iniciar el servidor: ', err);
});