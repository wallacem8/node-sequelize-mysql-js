const officesRepository = require('../repositories/officesRepository');

exports.getAllOffices = async (req, res) => {
    const offices = await officesRepository.getAllOffices();
    res.json(offices);
}

exports.getByOfficeCode = async (req, res) => {
    const office = await officesRepository.getOfficeByOfficeCode(req.params.officeCode);
    res.json(office);
}

exports.createOffice = async (req, res) => {
    const office = officesRepository.createOffice(req.body);
    res.json(office);
}

exports.updateOffice = async (req, res) => {
    const office = await officesRepository.updateOffice(req.params.officeCode);
    res.json(`${office}`);
}

exports.deleteOffice = async (req, res) => {
    await officesRepository.deleteOffice(req.params.officeCode);
    res.json({sucess: true});
}

