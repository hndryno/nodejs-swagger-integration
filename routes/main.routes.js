const customer = require('./customer.routes')
const index = require('./index.routes')
const category = require('./category.routes')
const user = require('./user.routes')
const verifyToken = require('../middleware/verivy_jwt.middleware')

const routes = (app) => {
    app.use('/', index)
    app.use('/category', category)
    app.use('/customer', verifyToken(), customer)
    app.use('/user', user)
}

module.exports = routes