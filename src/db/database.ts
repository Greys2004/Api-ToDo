import { Sequelize } from 'sequelize-typescript';
import { envs } from '../config/envs';
//models representa mi tabla
import Todo from '../models/todo.model';

//Hace la conexion
export const db = new Sequelize({
    database: envs.MYSQL_DB,
    username: envs.MYSQL_USER,
    password: envs.MYSQL_PASSWORD,
    host: envs.MYSQL_HOST,
    port: envs.MYSQL_PORT,
    dialect: 'mysql',
    models: [Todo],
});

//se encargará de sincronizar la base de datos.
export const dbConnection = async () => {
    try {
        //db.sync== sincroniza la base de datos
        //force: false === no se eliminarán las tablas existentes ni se volverán a crear. 
        await db.sync({ force: false });
        console.log('Database connected successfully');
    } catch (error) {
        console.error(`Database connection error: ${error}`);
    }
};
