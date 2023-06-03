//importamos express 
import express from "express";
import router from "./routes/authRoutes.js";
import db from "./config/db.js";
// se asigna a la constante app y se crea la app
const app = express();
const PORT = 3000 

//habilitar lectura de datos de formularios middleware
app.use(express.urlencoded({extended: true}));

//conexion a bd
try {
    await db.authenticate();
    db.sync()
    console.log('conexion correcta')
} catch (error) {
    console.log(error)
}

//con app podemos utilizar las distintas consultas http ya sea get, post, put, delete, patch
//se le pasa una ruta y un callback con reques y response
//en este caso utilizamos use para que busque todas las rutas que empizan con slash dentro de router
app.use('/auth', router)

//set para agregar configuracion le indicamos que el motor sera pug
app.set('view engine', 'pug')
//le indicamos que nuestras vistas estaran en la carpeta ./view
app.set('views', './views')
//ruta estatica que tendran acceso
app.use( express.static('public'))
// con listen echamos a correr el servidor asignandole un puerto y un callback
app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`)
})
