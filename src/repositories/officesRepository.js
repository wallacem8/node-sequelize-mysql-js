const officeModels = require('../models/officeModels');



exports.getAllOffices = async () => {
    const offices = await officesModel.findAll();
    return offices;
}

exports.getOfficeByOfficeCode = async (officesCode) => {
    const office = await officesModel.findByPk(officesCode);
    return office;
}

exports.createOffice = async (office) => {
    const newOffice = await officeModels.create(office);
    return newOffice;
}

exports.updateOffice = async (officeCode, office) => {
    const updateOffice = await officesModel.update(office, {
        where: {
            officeCode: officeCode
        }
    });
    return updateOffice;
}

exports.deleteOffice = async (officeCode) => {
    const deleteOffice = await officeModels.destroy({
        where: {
            officeCode: officeCode
        }
    });
}