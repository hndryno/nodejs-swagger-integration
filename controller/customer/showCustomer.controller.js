const Customer = require('../../model/customer.model')
const API = require('../../action/index.action')
const response = require('../../response/index.response')

class CustomerShow extends API{
    constructor(){
        super(Customer)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let _id = {_id: id }
            let population = []
            let data  = await this.show(_id, population)
            return res.send(
                response.success(null, 'show data successfully!', data)
            )
        }catch(err){
            return res.status(400).json({
                status: "error",
                message: err.message
            })
        }
    }
}

module.exports = CustomerShow