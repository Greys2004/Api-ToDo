// src/server.ts
import express from 'express';
import { dbConnection } from '../src/db/database';
import todoRoutes from './routes/todo.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos
dbConnection();

// Usar las rutas de la API
app.use('/api', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
