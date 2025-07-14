const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Exam App API',
      version: '1.0.0',
      description: 'API documentation for Exam App'
    }
  },
  apis: ['./src/routes/*.js'], // location of your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;