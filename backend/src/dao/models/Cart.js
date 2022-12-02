import { db } from '../db/connection';
import { DataTypes } from 'sequelize';
const Cart = db.define(
    'Cart',
    {
        cart_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cart_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artwork_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);
Cart.sync({ alter: true });

export default Cart;
