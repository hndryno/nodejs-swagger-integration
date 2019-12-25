const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustromerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    }
})

let Customer = mongoose.model('Customer', CustromerSchema)
module.exports = Customer