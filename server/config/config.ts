// El puerto del servidor

process.env.PORT = process.env.PORT || "3000";

// El entorno de ejecución

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// URL de conexión de Base de datos

if(process.env.NODE_ENV === "dev"){
    process.env.URLDB = 'mongodb+srv://alumno:awoseu2@cluster0-msy57.mongodb.net/AWOSEU2';
} else {
    process.env.URLDB = 'mongodb+srv://alumno:awoseu2@cluster0-msy57.mongodb.net/AWOSEU2';
}

process.env.SEED = process.env.SEED || '#$&!QYcKADSA/=)(?=';

process.env.CADUCIDAD_TOKEN = '3h';