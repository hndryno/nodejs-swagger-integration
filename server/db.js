const mongoose = require('mongoose')
require('dotenv').config()
const HOST = process.env.HOST

mongoose.connect(HOST, {
    'useNewUrlParser': true
});
mongoose.set('useCreateIndex', true);