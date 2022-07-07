const mongoose = require("mongoose")
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

// get order by user id 

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

    // get order by email 

    const orderbymail = async(req,res) =>{
      try{
        const email = req.params.email;
            const query = { email: email };
            const result = await Order.find(query);
      
            res.send(result);

      }catch(error){
          res.status(500).json({error: error.message})
      }
    }
  
    // get all orderby fiend wize 
    const categorifilter = async(req,res) =>{
     try{
      const category = req.params.category;
      const query = {category:category};
      const result = await Order.find(query);
      res.send(result);
     }catch(error){
      res.status(500).json({error: error.message})
  }

    }

    // get provider email quiery 
    const orderproviderbymail = async(req,res) =>{
      try{
        const email = req.params.email;
            const query = { providerEmail: email };
            const result = await Order.find(query);
      
            res.send(result);

      }catch(error){
          res.status(500).json({error: error.message})
      }
    }


    //  update user access 

// const updateUserAccess = async(req,res) =>{
//   try {
//       const id = req.params.id;
//       const filter = { _id: mongoose.Types.ObjectId(id) };
//       const updateDoc = { $set: req.body };
//       const options = { upsert: true };
//       const result = await User.findOneAndUpdate(filter, updateDoc, options);
//       res.json(result);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
// }
  
// status update orders 
const orderStatus = async(req,res) =>{
  try{
    const id = req.params.id;
    const filter = { _id:mongoose.Types.ObjectId(id)};
    const updateDoc = { $set : req.body};
    const options = {upsert: true};
    const result = await Order.findOneAndUpdate(filter,updateDoc,options);
    res.json(result);
  } catch (err) {
          res.status(500).json({ error: err.message });
        }
}


module.exports = {postOrder,allOrders, userOrders, orderbymail,orderproviderbymail, categorifilter, orderStatus}