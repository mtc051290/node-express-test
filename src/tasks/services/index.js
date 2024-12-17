const { taskExists, getRandomId, purifier, initialTasks } = require('../../helpers');

let tasks = initialTasks;

const getTasks = async (req, res) => {
    try {
        return res.status(200).json(tasks);
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

const createTask = async (req, res) => {
    try {
        // Check if the request body is valid
        if (!purifier(req.body, ['title', 'completed'])) {
            throw new Error('Invalid request body');
        }

        // Get the title and completed from the request body
        const { title, completed } = req.body;

        // Generate a random id
        let id = 0;
        let maxCount = 10000;
        do {
            id = getRandomId(1, 10000);
        } while (taskExists(tasks, id) && maxCount-- > 0);

        // Check if the id was generated
        if (maxCount <= 0) {
            throw new Error('Could not generate a new id');
        }

        // Create a new task
        const newTak = {
            id,
            title,
            completed,
        };
        tasks.push(newTak);

        return res.status(200).json(newTak);
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

const updateTask = async (req, res) => {
    try {
        // Get the id from the URL
        let { id } = req.params;
        id = parseInt(id);

        // Find the task
        if (!taskExists(tasks, id)) {
            throw new Error('Task not found');
        }

        // Update the task
        let updated = {};
        const { title, completed } = req.body;
        tasks.map((task) => {
            if (task.id === id) {
                task.title = title ? title : task.title;
                task.completed = completed ? completed : task.completed;
                updated = task;
            }
            return task;
        });

        return res.status(200).json(updated);
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        // Get the id from the URL
        let { id } = req.params;
        id = parseInt(id);

        // Find the task
        if (!taskExists(tasks, id)) {
            throw new Error('Task not found');
        }

        // Delete the task
        tasks = tasks.filter((task) => task.id !== id);

        return res.status(200).json({
            message: 'Task deleted',
        });
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
