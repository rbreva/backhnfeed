//llamo el modulo express en una constante
const express = require('express');
//llamo mongoose
const mongoose = require('mongoose');
//ejecuto dotenv
require("dotenv").config();
const hnfeedRoute = require('./routes/hnfeed');

//ejecuto expreess y lo atrubuyo a app
const app = express();

// constante para el puerto
const port = process.env.PORT || 3000;

//middleware para API
app.use(express.json());
app.use("/api", hnfeedRoute);

// rutas
app.get("/", (req, res) => {
    res.send("API ok");
});

// mongodb conecion con la uri protegida en una variable de ambiente
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a Atlas"))
    .catch((error) => console.error(error));


//uso app para escuchar al servidor
app.listen(port, () => console.log('Server ready on', port))
