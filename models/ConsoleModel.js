const modelo = require('./database/database');

/**
 * Regresa todas las compañias que existen en la base de datos
 * @returns {Array} 
 */
exports.findAll = async function () {
    let consoles = await modelo.Console.findAll();
    return consoles;
}

exports.findById = async function (id) {
    let console = await modelo.Console.findOne({
        where: {
            IdConsole: id
        }
    });
    return console;
}

exports.add = async function (newCompany) {

}

exports.delete = async function (id) {
    let respuesta = await modelo.Console.destroy({
        where: {
            IdConsole: id
        }
    });
    if (respuesta == 0)
        return false;
    else
        return true;
}
