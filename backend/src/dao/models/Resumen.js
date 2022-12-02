import { db } from '../db/connection';
import { DataTypes } from 'sequelize';
const Resumen = db.define(
    'Resumen',
    {
        resumen_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
        resumen_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);
Resumen.sync({ alter: true });

export default Resumen;
