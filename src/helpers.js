// Check if a task exists in the tasks array
const taskExists = (tasks, id) => {
    if (tasks.find((t) => t.id === id)) {
        return true;
    }
    return false;
};

// Get a random id between init and end
const getRandomId = (init, end) => {
    return Math.floor(Math.random() * end) + init;
};

// Req purifier function
const purifier = (obj, arrayProperties) => {
    let results = arrayProperties.map((property) => {
        return obj.hasOwnProperty(property);
    });
    if (results.includes(false)) {
        return false;
    } else {
        return true;
    }
};

// Initial tasks array
const initialTasks = [
    {
        id: 1,
        title: 'Task 1',
        completed: false,
    },
    {
        id: 2,
        title: 'Task 2',
        completed: false,
    },
    {
        id: 3,
        title: 'Task 3',
        completed: false,
    },
];

module.exports = {
    taskExists,
    getRandomId,
    purifier,
    initialTasks,
};
