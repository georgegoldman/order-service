'use strict'

const joi = require('joi')

module.exports = joi.object().keys({
    customerId: joi.string()
        .required(),
    status: joi.string()
        .required()
})
