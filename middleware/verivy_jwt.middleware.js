const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = () => {
    return (req, res, next) => {
        let authorization = req.header("Authorization")
        let unauthenticated = {
            status: "unauthenticated",
            message: "Invalid header bearer token"
        }

        if(authorization == undefined) {
            return res.status(401).json(unauthenticated)
        }

        let [ bearer, token ] = authorization.split(' ')
        if(!bearer || bearer != 'Bearer') {
            return res.status(401).json(unauthenticated)
        }

        if(token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
                if(err) return res.status(401).json(unauthenticated)

                return next()
            })
        } else {
            return res.status(401).json(unauthenticated)
        }
    }
}