import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import { updateUserProfile } from './userController.js'

//@desc Create new order
//@route POST /api/order
//@acces private

const addOrderItems = asyncHandler(async(req,res)=>{

    const 
    { orderItems,
        shippingAddress,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice } = req.body
        
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No orders')
    }else{
        const order = new Order({
            orderItems,
            user:req.user._id,
            shippingAddress,
            paymentMethod,
            itemPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createdOrder = await order.save()
        
        res.status(201).json(createdOrder)
    }

})

//@desc Get order by id
//@route GET /api/order/:id
//@acces private

const getOrderById = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id).populate('user','name email')
    if(order){
        res.json(order)
    }
    else{
        res.status(404)
        throw new Error('NO orders found')
    }
})

//@desc Update order to paid
//@route GET /api/order/:id/pay
//@acces private

const updateOrderToPaid = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)

    if(order){
        order.isPaid = true,
        order.paidAt = Date.now(),
        order.paymentResult = {
            id:req.body.id,
            status: req.body.status,
            update_time : req.body.update_time,
            email_address: req.body.email_address
        }
        const updateOrder = await order.save()
        res.json(updateOrder)
    }
    else{
        res.status(404)
        throw new Error('NO orders found')
    }
})

//@desc Get logged in user order
//@route GET /api/order/myorders
//@acces private

const getMyorders = asyncHandler(async(req,res)=>{
    const orders = await Order.find({user:req.user._id})
    res.json(orders)

})

//@desc Get all orders
//@route GET /api/order
//@acces private/admin

const getorders = asyncHandler(async(req,res)=>{
    const orders = await Order.find({}).populate('user','id name')
    res.json(orders)

})
//@desc Update order to delivered
//@route GET /api/order/:id/deliver
//@acces private/admin

const updateOrderToDelivered = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)

    if(order){
        order.isDelivered = true
        order.deliveredAt = Date.now()

        const updateOrder = await order.save()
        res.json(updateOrder)
    }
    else{
        res.status(404)
        throw new Error('NO orders found')
    }
})

export {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyorders,
    getorders,
    updateOrderToDelivered
   
}