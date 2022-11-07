const BaseService = require('./base_service');

module.exports =  class OrderService extends BaseService {
        /**
         * @constructor  Instance of our logger.
         * @param  {object}  config  Service config
         */

        constructor(log, util, errorHandler, request, config, mongoose) {
                super();
                this.log = log
                this.util = util
                this.errorHandler = errorHandler
                this.request = request
                this.config = config
                this.mongoose = mongoose
        }

        async createOrder(req, res) {
                
                try {
			const Order = this.mongoose.model('Order')
			const { customerId, status } = req.body			
                        let newOrder = new Order({customerId, status});
                        const createOrder = await newOrder.save()
                        res.json(createOrder);
                        return;
                } catch (error) {
                        console.log(error)
                        res.json(error)
                        return;
                }

        }

        async getOrder(req, res) {
                
                try {
			const Order = this.mongoose.model('Order')
			const { id } = req.params
                        const _id = id
			const order = await Order.findOne({ _id })
			if (order) {
				res.json(order)
                                return;
			}
                        res.json('order does not exit');
                        return;
                } catch (error) {
                        console.log(error)
                        res.json(error)
                        return;
                }

        }

        async upateOrder(req, res) {
                
                try {
			const Order = this.mongoose.model('Order')
			const { id } = req.params
                        const { status } = req.body
                        const _id = id
			const order = await Order.findOne({ _id })
			if (order) {
                                const orderUpdate = await Order.findOneAndUpdate(
                                        {"_id": _id},
                                        { $set:  { "status" : `${status}`} },
                                        {returnNewDocument: true}
                                    )
				res.json(orderUpdate)
                                return;
			}
                        console.log('pk');
                        res.json('can\'t update order that does not exit');
                        return;
                } catch (error) {
                        console.log(error)
                        res.json(error)
                        return;
                }

        }

        async deleteOrder(req, res) {
                
                try {
			const Order = this.mongoose.model('Order')
			const { id } = req.params
                        const _id = id
			const order = await Order.findOne({ _id })
			if (order) {
                                const orderUpdate = await Order.deleteOne(
                                        {"_id": _id},
                                    )
				res.json(orderUpdate)
                                return;
			}
                        res.json('can\'t delete order that does not exit');
                        return;
                } catch (error) {
                        console.log(error)
                        res.json(error)
                        return;
                }

        }

}
