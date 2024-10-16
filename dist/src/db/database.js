"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.db = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const envs_1 = require("../config/envs");
//models representa mi tabla
const todo_model_1 = __importDefault(require("../models/todo.model"));
//Hace la conexion
exports.db = new sequelize_typescript_1.Sequelize({
    database: envs_1.envs.MYSQL_DB,
    username: envs_1.envs.MYSQL_USER,
    password: envs_1.envs.MYSQL_PASSWORD,
    host: envs_1.envs.MYSQL_HOST,
    port: 3309,
    dialect: 'mysql',
    models: [todo_model_1.default],
});
//se encargará de sincronizar la base de datos.
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //db.sync== sincroniza la base de datos
        //force: false === no se eliminarán las tablas existentes ni se volverán a crear. 
        yield exports.db.sync({ force: false });
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error(`Database connection error: ${error}`);
    }
});
exports.dbConnection = dbConnection;
