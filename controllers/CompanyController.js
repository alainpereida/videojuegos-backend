const CompanyModel = require('../models/CompanyModel');

/**
 * 
 * @request {json} 
 * @response 
 */
exports.findAll = function (request, response) {
    CompanyModel.findAll().then((companys) => {
        response.status(200).json(companys)
    }).catch(err => {
        console.log(err);
        response.status(500).json({ mensaje: err })
    });
}

exports.create = function (request, response) {
    CompanyModel.add(request.body).then((company) => {
        response.status(200).json(company)
    }).catch(err => {
        console.log(err);
        response.status(500).json({ mensaje: err })
    });
}

exports.delete = function (request, response) {
    CompanyModel.delete(request.body.id).then((company) => {
        response.status(200).json({ msg: `id: $(request.body.id) deleted succesfully` })
    }).catch(err => {
        console.log(err);
        response.status(500).json({ mensaje: err })
    });
}