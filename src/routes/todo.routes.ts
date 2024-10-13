import { Router } from 'express';
import Todo from '../models/todo.model';

const router = Router();

// GET /todos
router.get('/', async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
});

// GET /todos/:id
router.get('/:id', async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

// POST /todos
router.post('/', async (req, res) => {
    const { title, description, completed } = req.body;
    const todo = await Todo.create({ title, description, completed });
    res.status(201).json(todo);
});

// PUT /todos/:id
router.put('/:id', async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.completed = req.body.completed;
        await todo.save();
        res.json(todo);
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

// DELETE /todos/:id
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
