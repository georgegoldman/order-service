'use strict'

const joi = require('joi')

module.exports = joi.object().keys({
    status: joi.string()
        .required()
})
