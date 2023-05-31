const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const employeesModels = sequelize.define('employees', {
    employeeNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    extension: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    officeCode: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    reportsTo: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        
    },
    jobTitle: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'employees',
    timestamps: false,
});

module.exports = employeesModels;