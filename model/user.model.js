const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    slug : {
        type: String
    },
    created_at:{
        type: Date,
        defaut: Date.now()
    }
})

let User = mongoose.model('User', UserSchema)
module.exports = User