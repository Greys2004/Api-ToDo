import { Router } from 'express';
// Importa el modelo Todo, la base de datos
import Todo from '../models/todo.model';

const router = Router();

// GET Api/
router.get('/', async (req, res) => {
    //El Todo sale de models/todo.model.ts
    const todos = await Todo.findAll();
    //envia la respuesta en JSON
    res.json(todos);
});

// GET api/id
router.get('/:id', async (req, res) => {
    const busquedaId = await Todo.findByPk(req.params.id);
    if (busquedaId) {
        res.json(busquedaId);
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

// POST api/
router.post('/', async (req, res) => {
    //Extrae los datos del cuerpo de la solicitud.
    const { title, description, completed } = req.body;
    //Crea una nueva tarea con los datos proporcionados.
    const crear = await Todo.create({ title, description, completed });
    res.status(201).json(crear);
});

// PUT api/id
//ACTUALIZAR
router.put('/:id', async (req, res) => {
    const actualizar = await Todo.findByPk(req.params.id);
    if (actualizar) {
        actualizar.title = req.body.title;
        actualizar.description = req.body.description;
        actualizar.completed = req.body.completed;
        await actualizar.save();
        res.json(actualizar);
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

// DELETE api/id
router.delete('/:id', async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
        await todo.destroy();
        res.status(204).send();
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

export default router;
