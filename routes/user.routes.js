const express = require('express')
const router = express.Router()
const userCreate = require('../controller/user/createUser.controller')
const userLogin = require('../controller/user/loginUser.controller')
// const customerList = require('../controller/customer/listCustomer.controller')
// const customerDelete = require('../controller/customer/deleteCustomer.controller')
// const customerShow = require('../controller/customer/showCustomer.controller')
// const customerUpdate = require('../controller/customer/updateCustomer.controller')

//Routes
/**
 * @swagger
 * paths:
 *  /user/create:
 *   post:
 *      tags:
 *      - "User"
 *      summary: create User data
 *      consumes:
 *         - application/json
 *      description: use to create User data
 *      parameters:
 *         - name: body
 *           in : body
 *           required: true
 *           schema:
 *               $ref: '#/definitions/User'
 *      responses: 
 *          200:
 *              description: A successfull response
 *              schema:
 *                  properties:
 *                      id:
 *                         format: string
 *                         example: 5e0187545a531c4105fce4c7
 *                      email:
 *                         format: email
 *                         example : Hendri
 *                      password:
 *                         format: password
 *                         example: 20
 *                      name:
 *                         format: string
 *                         example: katob kentang
 *                      slug:
 *                          format: string
 *                          example: katob-kentang
 */
router.post('/create', async (req, res, next) =>
    await new userCreate().exec(req, res,next))
/**
 * @swagger
 * paths:
 *  /user/login:
 *   post:
 *      tags:
 *      - "User"
 *      summary: Login user
 *      consumes:
 *         - application/json
 *      description: use it to login and get some header token
 *      parameters:
 *         - name: body
 *           in : body
 *           required: true
 *           schema:
 *               properties:
 *                  email:
 *                      format : email
 *                      example: hendriyono@user.com
 *                  password:
 *                      format : password
 *                      example : test123
 *      responses: 
 *          200:
 *              description: A successfull response
 *              schema:
 *                  properties:
 *                      id:
 *                         format: string
 *                         example: 5e0187545a531c4105fce4c7
 *                      email:
 *                         format: email
 *                         example : Hendri
 *                      password:
 *                         format: password
 *                         example: 20
 *                      token:
 *                         format : string
 *                         example: asdhjasdg2736457234jhgjda7asd67ad
 */

router.post('/login', async (req, res) => {
    try{
        let data = await new userLogin(req).exec()
        return res.status(200).json({
            status: 'success',
            data,
            message: 'Anda berhasil login!'
        })
    }catch(e){
        return res.status(400).json({
            status: 'gagal login!',
            message: e.message
        })
    }
})

//Models
/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       email:
 *         type: email
 *         example: hendriyono@gmail.com
 *       password:
 *         type: password
 *         example: test123
 *       name:
 *         type: string
 *         example: Hendriyono
 */

module.exports = router
