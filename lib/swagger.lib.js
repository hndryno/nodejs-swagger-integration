require('dotenv').config()
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOptions = {
    swaggerDefinition: {
        components:{},
        info: {
            title: 'Customer API',
            version: 1.0,
            description: `Customers API, you can try this API to your application.
                            Contact : Hendriyono@protonmail.com`,
            servers: [process.env.SWAGGER_SERVER || 5000]
        }   
    },
    apis: ["./routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = {swaggerDocs}