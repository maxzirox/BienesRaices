import express from "express";
import { formularioContraseña, formularioLogin, formularioRegister } from "../controllers/userController.js";

const router = express.Router()

//con app podemos utilizar las distintas consultas http ya sea get, post, put, delete, patch
//se le pasa una ruta y un callback con reques y response
router.get('/Login', formularioLogin)
router.get('/Register', formularioRegister)
router.get('/recovery', formularioContraseña)


export default router