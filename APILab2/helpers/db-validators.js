const Usuario = require('../models/usuario');
const Mascota = require('../models/mascotas');


const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});

    if(existeEmail){
        throw new Error(`el mail ${correo} ya se fue registrado`);
    } 

}

const existeUsuarioId = async (id='') => {
    const existeUsuario = await Usuario.findOne({id});

    if(!existeUsuario){
        throw new Error(`El usuario con el ${id} no existe`);
    }

}

const existeMascotaId = async (id = '') => {
    const existeId = await Mascota.findOne({id});
    if(existeId){
        throw new Error(`La Mascota con el Id ${ id } no existe`)
    }
}


module.exports = {
    existenteEmail,
    existeUsuarioId,
    existeMascotaId
}