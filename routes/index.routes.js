const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/', (req, res) => {
    db_status = mongoose.connection.readyState
    db_status_name = [ "disconnected", "connected", "connecting", "disconnecting" ]

    return res.send({
        app_name: 'percobaan',
        database_status: db_status_name[db_status]
    })
})

module.exports = router