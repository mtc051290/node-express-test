const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const tasksControllers = require('./src/tasks/controllers');

let app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Tasks API',
            version: '1.0.0',
            description: 'A simple Express Tasks API',
        },
        servers: [
            {
                url: `http://localhost:${PORT}/tasks`,
                description: 'Local server',
            },
        ],
        components: {
            schemas: {
                Task: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        title: {
                            type: 'string',
                            example: 'My Task',
                        },
                        completed: {
                            type: 'boolean',
                            example: false,
                        },
                    },
                },
                TaskDto: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string',
                            example: 'My Task',
                            required: true,
                        },
                        completed: {
                            type: 'boolean',
                            example: false,
                            required: true,
                        },
                    },
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'Error message',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/tasks/controllers/*.js'], // Task routes
};

// Init Swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware for Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// CORS
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
app.use('/tasks', tasksControllers);

app.listen(PORT, function () {
    console.log(`Express Tasks App running at http://localhost:${PORT}/`);
    console.log(`Swagger UI running at http://localhost:${PORT}/api-docs`);
});
