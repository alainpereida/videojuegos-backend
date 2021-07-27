const modelo = require('./database/database');

/**
 * Regresa todas las compañias que existen en la base de datos
 * @returns {Array} 
 */
exports.findAll = async function () {
    let companys = await modelo.Company.findAll();
    return companys;
}

exports.findById = async function (id) {
    let companys = await modelo.Company.findOne({
        where: {
            IdCompany: id
        }
    });
    return companys;
}

exports.add = async function (newCompany) {
    let company = await modelo.Company.create({
        Nombre: newCompany.Nombre,
    });
    return company;
}

exports.delete = async function (id) {
    let respuesta = await modelo.Company.destroy({
        where: {
            IdCompany: id
        }
    });
    if (respuesta == 0)
        return false;
    else
        return true;
}
