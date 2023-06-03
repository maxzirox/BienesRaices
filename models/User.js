import { DataTypes } from 'sequelize'
import db from '../config/db.js'

// aqui definimos nuestra primera tabla en la base de datos llamada users
const User = db.define('Users', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirm: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default User;
