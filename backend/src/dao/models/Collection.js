import { db } from '../db/connection';
import { DataTypes } from 'sequelize';
const Collection = db.define(
    'Collection',
    {
        collection_id: {
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
        artwork_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);
Collection.sync({ alter: true });

export default Collection;
