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

// get order by email 

// get user orders
const userOrders = async (req, res) => {
    try {
      const userId = req.params.userId;
      const query = { userId: mongoose.Types.ObjectId(userId) };
      const orders = await Order.find(query)
        // .populate("productId", "price name")
        // .populate("userId", "username email");
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
      //get api filter by email for single order
    //   app.get("/myOrder/:email", async (req, res) => {
    //     const email = req.params.email;
    //     const query = { email: email };
    //     const result = await orderCollection.find(query).toArray();
  
    //     res.send(result);
    //   });
  


module.exports = {postOrder,allOrders, userOrders}