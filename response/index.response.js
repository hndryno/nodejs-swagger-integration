let successCode = 200
let errorCode = 400
let message = ""

class Response {
    static success(code, msg, data) {
        if(code) {
            successCode = code
        }

        if(msg) {
            message = msg
        }

        let status = "success"
        let result = {
            code: successCode,
            status,
            message,
            data
        }

        return result
    }

    static error(code, msg) {
        if(code) {
            errorCode = code
        }

        if(msg) {
            message = msg
        }

        let status = "error"
        let result = {
            code: errorCode,
            status,
            message
        }

        return result
    }
}

module.exports = Response
