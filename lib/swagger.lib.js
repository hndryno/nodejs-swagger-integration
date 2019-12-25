require('dotenv').config()
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Customer API',
            description: 'customer API information',
            contact: {
                name: 'amazing developer'
            },
            servers: [process.env.SWAGGER_SERVER]
        }
    },
    apis: ["./routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = {swaggerDocs}