const express = require('express')
const router = express.Router()
const categoryList = require('../controller/category/listCategory.controller')
const categoryCreate = require('../controller/category/createCategory.controller')
// const customerDelete = require('../controller/customer/deleteCustomer.controller')

//Routes
/**
 * @swagger
 * /categories:
 *  get:
 *      tags: 
 *      - "Category"
 *      summary: get list of categories data
 *      description: Use to request all categories data
 *      responses: 
 *          '200':
 *              description: A successfull response
 *          '401':
 *              description: Not authenticated
 */
router.get('/', async (req, res, next) => 
    await new categoryList().exec(req, res, next))

/**
 * @swagger
 * /category:
 *  post:
 *      tags:
 *      - "Category"
 *      summary: create category data
 *      description: use to create category data
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Create Key Data"
 *        required: true
 *      responses: 
 *          '201':
 *              description: A successfull response
 *          '401':
 *              description: Not authenticated
 */
router.post('/', async (req, res, next) =>
    await new categoryCreate().exec(req, res,next))

//Models
/**
 * @swagger
 * definitions:
 *   Category:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         example: Air
 */

module.exports = router