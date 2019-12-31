const Category = require('../../model/category.model')
const API = require('../../action/index.action')
const response = require('../../response/index.response')

class CategoryList extends API{
    constructor(){
        super(Category)
    }

    async exec(req, res, next){
        try{
            let params = {}
            let search = req.query
            
            let population = []
            let data = await this.list(search, population)
    
            return res.send(
                response.success(null, 'success get categories data', data)
            )
        }catch(err){
            return res.send(
                response.error(null, 'something wrong!', err)
            )
        }

    }
}

module.exports = CategoryList