const Category = require('../../model/category.model')
const API = require('../../action/index.action')
const response = require('../../response/index.response')

class CreateCategory extends API{
    constructor() {
        super(Category)
    }

    async exec(req, res, next){
        try{
            let { name } = req.body
            let request_data = {
                name
            }

            let data = await this.create(request_data)

            return res.send(
                response.success(null, 'Created category data', data )
            )
        }catch(err){
            return res.status(400).json({
                status: "error",
                message: err.message
            })
        }
    }
}

module.exports = CreateCategory