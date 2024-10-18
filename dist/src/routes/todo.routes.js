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
const express_1 = require("express");
// Importa el modelo Todo, la base de datos
const todo_model_1 = __importDefault(require("../models/todo.model"));
const router = (0, express_1.Router)();
// GET Api/
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //El Todo sale de models/todo.model.ts
    const todos = yield todo_model_1.default.findAll();
    //envia la respuesta en JSON
    res.json(todos);
}));
// GET api/id
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const busquedaId = yield todo_model_1.default.findByPk(req.params.id);
    if (busquedaId) {
        res.json(busquedaId);
    }
    else {
        res.status(404).send('Tarea no encontrada');
    }
}));
// POST api/
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Extrae los datos del cuerpo de la solicitud.
    const { title, description, completed } = req.body;
    //Crea una nueva tarea con los datos proporcionados.
    const crear = yield todo_model_1.default.create({ title, description, completed });
    res.status(201).json(crear);
}));
// PUT api/id
//ACTUALIZAR
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const actualizar = yield todo_model_1.default.findByPk(req.params.id);
    if (actualizar) {
        actualizar.title = req.body.title;
        actualizar.description = req.body.description;
        actualizar.completed = req.body.completed;
        yield actualizar.save();
        res.json(actualizar);
    }
    else {
        res.status(404).send('Tarea no encontrada');
    }
}));
// DELETE api/id
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todo_model_1.default.findByPk(req.params.id);
    if (todo) {
        yield todo.destroy();
        res.status(204).send();
    }
    else {
        res.status(404).send('Tarea no encontrada');
    }
}));
exports.default = router;
