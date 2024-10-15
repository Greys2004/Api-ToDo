"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const database_1 = require("../src/db/database");
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para parsear JSON
app.use(express_1.default.json());
// Conectar a la base de datos usada en database.ts
(0, database_1.dbConnection)();
// Usar las rutas de la API
app.use('/api', todo_routes_1.default);
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puero: ${PORT}`);
});
