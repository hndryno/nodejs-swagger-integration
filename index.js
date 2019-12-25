const express = require('express')
const app = express()
require('dotenv').config()
require('./server/db')
app.use(express.urlencoded({ extended:true }))
const { swaggerDocs } = require('./lib/swagger.lib')
const swaggerUi = require('swagger-ui-express')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
require('./routes/main.routes')(app)

port = process.env.PORT

app.listen(port, () => {
    console.log(`app listen on ${port}`)
})

//Routes
// /**
//  * @swagger
//  * /customers:
//  *  get:
//  *      tags: 
//  *      - "Customer"
//  *      summary: get list of customer data
//  *      description: Use to request all customers data
//  *      responses: 
//  *          '200':
//  *              description: A successfull response
//  */
// app.get('/customers', (req, res) => {
//     res.send('Customers result')
// })

// /**
//  * @swagger
//  * /customer/{id}:
//  *  put:
//  *      tags:
//  *      - "Customer"
//  *      summary: update Customer
//  *      description: update customer data
//  *      responses: 
//  *          '201':
//  *              description: A successfull response
//  */
// app.put('/customers/{id}', (req, res) => {
//     res.send('Customers result')
// })

// /**
//  * @swagger
//  * /customer:
//  *  post:
//  *      tags:
//  *      - "Customer"
//  *      summary: create Customer
//  *      description: created customer data
//  *      parameters:
//  *      - in: "body"
//  *        name: "body"
//  *        description: "Create Key Data"
//  *        required: true
//  *      responses: 
//  *          '201':
//  *              description: A successfull response
//  */
// app.post('/customers/{id}', (req, res) => {
//     res.send('Customers result')
// })



