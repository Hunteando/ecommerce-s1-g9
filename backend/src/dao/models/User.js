import { db } from '../db/connection';
import { DataTypes } from 'sequelize';
const User = db.define(
    'Users',
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);
User.sync({ alter: true });

export default User;
