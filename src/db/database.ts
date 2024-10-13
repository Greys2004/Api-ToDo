import { Sequelize } from 'sequelize-typescript';
import { envs } from '../config/envs';
import Todo from '../models/todo.model';

export const db = new Sequelize({
    database: envs.MYSQL_DB,
    username: envs.MYSQL_USER,
    password: envs.MYSQL_PASSWORD,
    host: envs.MYSQL_HOST,
    port: 3309,
    dialect: 'mysql',
    models: [Todo],
});

export const dbConnection = async () => {
    try {
        await db.sync({ force: false });
        console.log('Database connected successfully');
    } catch (error) {
        console.error(`Database connection error: ${error}`);
    }
};
