const API = require('../../action/index.action')
const Customer = require('../../model/customer.model')
const response = require('../../response/index.response')

class CustomerUpdate extends API{
    constructor(){
        super(Customer)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let { name, age, address } = req.body

            let request_data = {name, age, address}

            for(let prop in request_data) if(!request_data[prop]) delete request_data[prop]

            let data = await this.update(id, request_data)

            return res.send(
                response.success(null, 'data has been updated successfully', data)
            )
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
} 

module.exports = CustomerUpdate