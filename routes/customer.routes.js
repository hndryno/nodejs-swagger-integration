const express = require('express')
const router = express.Router()
const customerList = require('../controller/customer/listCustomer.controller')
const customerCreate = require('../controller/customer/createCustomer.controller')
const customerDelete = require('../controller/customer/deleteCustomer.controller')
const customerShow = require('../controller/customer/showCustomer.controller')
const customerUpdate = require('../controller/customer/updateCustomer.controller')

//Routes
/**
 * @swagger
 * paths:
 *  /customer:
 *   post:
 *      tags:
 *      - "Customer"
 *      summary: create customer data
 *      security:
 *          - bearerAuth: []
 *      consumes:
 *         - application/json
 *      description: use to create customer data
 *      parameters:
 *         - name: body
 *           in : body
 *           required: true
 *           schema:
 *               $ref: '#/definitions/Customer'
 *      responses: 
 *          200:
 *              description: A successfull response
 *              schema:
 *                  properties:
 *                      id:
 *                         format: string
 *                         example: 5e0187545a531c4105fce4c7
 *                      name:
 *                         format: string
 *                         example : Hendri
 *                      age:
 *                         format: number
 *                         example: 20
 *                      address:
 *                         format: string
 *                         example: Jalan Duri Kepa, No.20 Jakarta Selatan
 *                      slug:
 *                          format: string
 *                          example: hendri
 */
router.post('/', async (req, res, next) =>
    await new customerCreate().exec(req, res,next))

/**
 * @swagger
 * /customer:
 *  get:
 *      tags: 
 *      - "Customer"
 *      summary: get list of customers data
 *      security:
 *          - bearerAuth: []
 *      description: Use to request all customers data
 *      responses: 
 *          '200':
 *              description: A successfull response
 */
router.get('/', async (req, res, next) => 
    await new customerList().exec(req, res, next))

/**
 * @swagger
 * /customer/{id}:
 *  get:
 *      tags: 
 *      - "Customer"
 *      summary: show list of customer data
 *      security:
 *          - bearerAuth: []
 *      description: Use to request a customer data
 *      parameters:
 *          - in : path
 *            name : id
 *            required : true
 *      responses: 
 *          '200':
 *              description: A successfull response
 */
router.get('/:id', async (req, res, next) => 
    await new customerShow().exec(req, res, next))

/**
 * @swagger
 * /customer/{id}:
 *  put:
 *      tags:
 *      - "Customer"
 *      summary: update customer data
 *      security:
 *          - bearerAuth: []
 *      description: use to update customer data by id
 *      parameters:
 *          - in : path
 *            name : id
 *            required: true
 *          - in : body
 *            name : body
 *            schema : 
 *                  $ref: '#/definitions/Customer'
 *      responses: 
 *          '200':
 *              description: A successfull response
 */

    router.put('/:id', async (req, res, next) => 
    await new customerUpdate().exec(req, res, next))

/**
 * @swagger
 * /customer/{id}:
 *  delete:
 *      tags:
 *      - "Customer"
 *      summary: delete customer data
 *      description: use to delete customer data by id
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in : path
 *            name : id
 *            required: true
 *      responses: 
 *          '200':
 *              description: A successfull response
 */
router.delete('/:id', async (req, res, next) => 
    await new customerDelete().exec(req, res, next))

//Models
/**
 * @swagger
 * definitions:
 *   Customer:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         example: Hendriyono
 *       age:
 *         type: number
 *         example: 20
 *       address:
 *         type: string
 *         example: bojongsari Depok
 * securityDefinitions:
 *   bearerAuth:
 *      type: apiKey
 *      name: Authorization
 *      description: Enter bearer token to access this API
 *   
 */

module.exports = router
