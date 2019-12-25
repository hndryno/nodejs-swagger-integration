const customer = require('./customer.routes')
const index = require('./index.routes')

const routes = (app) => {
    app.use('/', index)
    app.use('/customer', customer)
}

module.exports = routes