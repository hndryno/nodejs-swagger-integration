const API = require('../../action/index.action')
const User = require('../../model/user.model')
const response = require('../../response/index.response')
const bcrypt = require('bcryptjs')
const slugify = require('slugify')

class UserCreate extends API{
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { email, password, name } = req.body
            let slug = slugify(name, {
                remove: null,
                lower: true
            })

            password = bcrypt.hashSync(password, 8)
            
            let request_data = { email, password, name, slug }
            let data = await this.create(request_data)
            res.send(
                response.success(null, 'data created successfully!', data)
            )
        }catch(err){
            return res.status(400).json({
                status: "error",
                message: err.message
            })
        }
    }
}  

module.exports = UserCreate