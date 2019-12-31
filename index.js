const express = require('express')
const app = express()
require('dotenv').config()
require('./server/db')
app.use(express.urlencoded({ extended:true }))
const { swaggerDocs } = require('./lib/swagger.lib')
const swaggerUi = require('swagger-ui-express')
const bodyParser = require('body-parser')
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const options = {
    customCss: ".swagger-ui .topbar { display: none }"
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options))
require('./routes/main.routes')(app)

port = process.env.PORT

app.listen(port, () => {
    console.log(`app listen on ${port}`)
})
