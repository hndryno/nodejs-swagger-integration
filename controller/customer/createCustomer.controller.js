const Customer = require('../../model/customer.model')
const API = require('../../action/index.action')
const response = require('../../response/index.response')

class CreateCustomer extends API{
    constructor() {
        super(Customer)
    }

    async exec(req, res, next){
        try{
            let {name, age, address,} = req.body
            let request_data = {
                name, age, address
            }

            let data = await this.create(request_data)

            return res.send(
                response.success(null, 'Created customer data', data )
            )
        }catch(err){
            return res.status(400).json({
                status: "error",
                message: err.message
            })
        }
    }
}

module.exports = CreateCustomer