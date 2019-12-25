const Customer = require('../../model/customer.model')
const API = require('../../action/index.action')
const response = require('../../response/index.response')

class CustomerDelete extends API{
    constructor(){
        super(Customer)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let _id = { _id: id }
            let data = await this.delete(_id)
    
            return res.send(
                response.success(null, 'success delete data', data)
            )
        }catch(err){
            return res.send(
                response.error(null, 'something wrong!', err)
            )
        }

    }
}

module.exports = CustomerDelete