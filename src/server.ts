// src/server.ts
import express from 'express';
import { dbConnection } from '../src/db/database';
import todoRoutes from './routes/todo.routes';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos usada en database.ts
dbConnection();

// Usar las rutas de la API
app.use('/api', todoRoutes);

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puero: ${PORT}`);
});
