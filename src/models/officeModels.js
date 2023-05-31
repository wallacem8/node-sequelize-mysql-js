const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const officeModels = sequelize.define('offices', {
    officeCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    addresLine1: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    addresLine2: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    territory: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
}, {
    tableName: 'offices',
    timestamps: false,
});

module.exports = officeModels;