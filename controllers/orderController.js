const mongoose = require("mongoose")
// const { Order } = require("../models/orderModel")
const { Order } = require("../models/orderModel")
// get all order 

const allOrders = async(req,res) =>{

try{
    const result = await Order.find({})
    res.json(result)
}catch(err){
    res.status(500).json({err:err.messege});
}

}

// post order 

const postOrder = async(req,res) =>{
    try{
        const result = await Order.insertMany(req.body)
        res.json(result)
    }catch(err){
        res.status(500).json({err:err.messege})
    }
}

module.exports = {postOrder,allOrders}