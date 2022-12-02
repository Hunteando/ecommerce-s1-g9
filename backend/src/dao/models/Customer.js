import { db } from '../db/connection';
import { DataTypes } from 'sequelize';
const Customer = db.define(
    'Customer',
    {
        customer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);
Customer.sync({ alter: true });

export default Customer;
