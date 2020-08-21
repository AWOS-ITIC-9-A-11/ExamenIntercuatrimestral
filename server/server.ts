// Importaciones
import express from "express";
import "./config/config";
import routes from "./routes/index";
import mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as eFileUpload from "express-fileupload";

// Declaraciones
const app = express();

// Rutas
app.use(eFileUpload.default());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api', routes);

// Conexión a BD
mongoose.connect(`${process.env.URLDB}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then((resp: any) => {
    console.log(`[MONGODB] Se ha conectado exitosamente a la base de datos`);
}).catch((err: any) => {
    console.log(`[MONGODB] Hubo un error al intentar conectar a la base de datos.`);
});

//Servidor
app.listen(process.env.PORT, () => {
    console.log(`[SERVER] El servidor está corriendo en el puerto ${process.env.PORT}`);
});