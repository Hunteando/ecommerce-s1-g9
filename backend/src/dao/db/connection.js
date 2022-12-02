import { Sequelize } from 'sequelize';
import { DB_DEVELOPMENT, DB_HOST } from '../../config/globals';

export const db = new Sequelize(DB_DEVELOPMENT, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    protocol: 'postgres',
    dialectOptions: {
        ssl: true,
        native: true,
    },
});

export const getConnection = async () => {
    try {
        console.log('Connection has been established successfully.');

        return db.authenticate();
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
};
