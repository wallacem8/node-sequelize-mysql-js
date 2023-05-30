const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const customers = sequelize.define('customers', {
    customerNumber: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    customerName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    contactLastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    contactFirstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    addressLine1: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    addressLine2: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    postalCode: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    
});