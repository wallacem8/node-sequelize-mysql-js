const customerRepository = require('../repositories/customersRepository');

exports.getAllCustomers = async (req, res) => {
    const customers = await customerRepository.getAllCustomers();
    res.json(customers);
}

exports.getByCustomerNumber = async (req, res) => {
    const customer = customerRepository.getByCustomerNumber(req.params.customerNumber);
    res.json(customer);
}

exports.createCustomer = async (req, res) => {
    const customer = await customerRepository.createCustomer(req.body);
    res.json(customer);
}

exports.updateCustomer = async (req, res) => {
    const customer = await customerRepository.updateCustomer(req.params.customerNumber);
    res.json(`${customer}`);
}

exports.deleteCustomer = async (req, res) => {
    await customerRepository.deleteCustomer(req.params.customerNumber);
    res.json({sucess: true});
}