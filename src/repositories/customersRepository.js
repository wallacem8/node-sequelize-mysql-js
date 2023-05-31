const officeModels = require('../models/customersModels');


exports.getAllCustomers = async () => {
    const customers = await officeModels.findAll();
    return customers;
}

exports.getByCustomerNumber = async (customerNumber) => {
    const customer = await officeModels.findByPk(customerNumber);
    return customer;
}

exports.createCustomer = async (customer) => {
    const newCustomer = await officeModels.create(customer);
    return newCustomer;
}

exports.updateCustomer = async (customerNumber, customer) => {
    const updateCustomer = await officeModels.update(customer, {
        where: {
            customerNumber: customerNumber
        }
    });
    return updateCustomer;
}

exports.deleteCustomer = async (customerNumber) => {
     await officeModels.destroy({
        where: {
            customerNumber: customerNumber
        }
    })
}
