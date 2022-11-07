const express = require('express')
const router = express.Router()
const 
    serviceLocator = require('../configs/dependancy_injector'),
    orderValidator = require('../validations/create_order'),
    orderValidatorUpdate = require('../validations/update_order'),
    validator = require('../middlewares/validator');

// define the order endpoint
module.exports = router
    .get("/:id", [], async (req, res) => {
        await serviceLocator.get('orderService').getOrder(req, res)
    })
    .put("/update/:id", validator.validate(orderValidatorUpdate),async (req, res) => {
        await serviceLocator.get('orderService').upateOrder(req, res)
    })
    .post("/create", validator.validate(orderValidator), async(req, res) => {
        await serviceLocator.get('orderService').createOrder(req, res)
    }).delete("/delete/:id", [], async (req, res) => {
        await serviceLocator.get('orderService').deleteOrder(req, res);
    });


