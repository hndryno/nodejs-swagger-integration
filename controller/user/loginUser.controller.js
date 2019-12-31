const User = require('../../model/user.model')
const response = require('../../response/index.response')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class Login{
    constructor(req){
        this.email = req.body.email,
        this.password = req.body.password
    }

    async exec(){
        try{
            let data = await User.find({
                email: this.email
            }).exec()

            if(data.length == 0){
                throw Error('User not found!')
            }

            let password = await bcrypt.compare(
                this.password,
                data[0].password
            )

            if(!password){
                throw Error('Wrong username or password')
            }

            let payload = {
                user_id: data[0]._id,
                user_name: data[0].name,
                user_email: data[0].email,
                user_slug: data[0].slug
            }

            let token = jwt.sign(payload, process.env.JWT_SECRET,{
                expiresIn: 3600
            })

            return {
                user: payload,
                token,
                expiresIn: "1 hour"
            }
        }catch(err){
            throw err
        }
    }
}

module.exports = Login