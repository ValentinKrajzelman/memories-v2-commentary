//para poder hacer import en node.js es necesario agregar type:module en el package de la app
//express es el framework con el que se crea la aplicacion de backend
import express from "express";
//bodyparser nos permite trabajar con json con una serie de funcionalidades extendidas
import bodyParser from "body-parser";
//mongoose se usa para crear la conexion con la mongoDB, tambien para crear los modelos
//es decir para definir la informacion que se va a guardar en mongoDB
import mongoose from "mongoose";
//cors (cross origin requests) nos permite recibir requests de varios origenes
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();

//body parser sirve para controlar los archivos que recibe la api
//se define un limite de tamaño
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//starting point de las routes, que dirige los requests sobre posts a postRoutes
app.use('/posts', postRoutes);

//codigo de conexion de atlas
const CONNECTION_URL = 'mongodb+srv://valentinkrajzelman:x6MYYndOxAtpJEwC@dbmemorias.acfpnm5.mongodb.net/?retryWrites=true&w=majority';

//puerto de host de la aplicacion
const PORT = process.env.PORT|| 5000;

//establece la conexion con atlas
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  //establece la el puerto de la aplicacion, y despues hace un callback para poner un msj en la consola
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//esto sirve para evitar warnings en la consola, no se por que
mongoose.set('useFindAndModify', false);