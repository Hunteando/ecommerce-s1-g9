import { DataTypes } from 'sequelize';
import { db } from '../db/connection';

const Artwork = db.define(
    'Artwork',
    {
        artwork_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        category_id: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: true }
);
Artwork.sync({ alter: true });

export default Artwork;
