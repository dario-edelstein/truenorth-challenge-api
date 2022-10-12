const express = require('express');
const tasksRouter = require('./routes/tasks');
const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/tasks', tasksRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`))