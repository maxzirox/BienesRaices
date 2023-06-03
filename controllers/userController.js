import User from "../models/User.js"

const formularioLogin = (req, res) => {
    //se envia una respuesta al servidor puede ser en json tambien
    //con render renderizamos en pantalla de la carpeta auth dentro de views el archivo login.pug
    //no es necesario poner views porque la parchamos en el index
    res.render('auth/login', {
        autenticado: true,
        pagina: 'Iniciar Sesion'
    })

}

const formularioRegister = (req, res) => {
    //se envia una respuesta al servidor puede ser en json tambien
    //con render renderizamos en pantalla de la carpeta auth dentro de views el archivo login.pug
    //no es necesario poner views porque la parchamos en el index
    res.render('auth/register', {
        pagina: 'Crear Usuario'
    })

}

const registrar = async (req, res) =>{
    const usuario = await User.create(req.body)
    
    res.json(usuario);
}

const formularioContraseña = (req, res) => {
    res.render('auth/recovery', {
        pagina: 'Recuperar contraseña'
    })
}


export {
    formularioLogin,
    formularioRegister,
    formularioContraseña,
    registrar
}