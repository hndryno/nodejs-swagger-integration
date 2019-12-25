const express = require('express')
const router = express.Router()
const customerList = require('../controller/customer/listCustomer.controller')
const customerCreate = require('../controller/customer/createCustomer.controller')
const customerDelete = require('../controller/customer/deleteCustomer.controller')

/**
 * @swagger
 * /customer:
 *  post:
 *      tags:
 *      - "Customer"
 *      summary: create customer data
 *      description: use to create customer data
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Create Key Data"
 *        required: true
 *      responses: 
 *          '201':
 *              description: A successfull response
 */
router.post('/', async (req, res, next) =>
    await new customerCreate().exec(req, res,next))

//Routes
/**
 * @swagger
 * /customers:
 *  get:
 *      tags: 
 *      - "Customer"
 *      summary: get list of customers data
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
 *  delete:
 *      tags:
 *      - "Customer"
 *      summary: delete customer data
 *      description: use to delete customer data by id
 *      responses: 
 *          '201':
 *              description: A successfull response
 */
router.delete('/{id}', async (req, res, next) => 
    await new customerDelete().exec(req, res, next))

module.exports = router