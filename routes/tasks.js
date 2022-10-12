const express = require('express');
const taskService = require('../services/tasks');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await taskService.getTasks(req.query.quantity);
        res.send(tasks);
    } catch (error) {
        next(error)
    }
});

router.put('/', (req, res) => {
    res.send(`task ${req.body.taskUuid} completed successfully`);
});

module.exports = router;