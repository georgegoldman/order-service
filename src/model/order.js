'use strict'

const status = ['pending', 'approved']

const
    serviceLocator = require('../configs/dependancy_injector'),
    mongoose = serviceLocator.get('mongoose');

const { Schema, model } = mongoose

const orderSchema = Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
        lowercase: true
    },
    status: {
        type: String,
        enum: status,
        default: 'pending',
        lowercase: true,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model("Order", orderSchema)
