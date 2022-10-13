const express = require('express');
const tasksRouter = require('./routes/tasks');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
const PORT = 3002;

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use('/tasks', tasksRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`))