import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config({path: '.env'})

const db = new Sequelize('bienesraices', 'root', '@Rzs27191', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool:{
        max: 5, //maximo de conexiones
        min: 0, //minimo de conexiones
        acquire: 30000, //30 segundos tratando de conectar
        idle: 10000, //10 segundos si no hay movimiento cierra la conexion
    },
});

export default db;