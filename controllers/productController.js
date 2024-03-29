const mongoose = require("mongoose");
const { Product } = require("../models/productModel");
// const { Product } = require("../models/jobModel");

// get product from db 
  
const getProduct = async(req,res)  =>{
    try{
        const products = await Product.find({});
        res.json(products)
    }catch(err){
            res.status(500).json({error:err.message})
    }
}



  
const singleProduct = async(req,res) =>{
    try{
        const id = parseInt(req.params.id);
        const quiry = {id:id};
        const result = await Product.findOne(quiry);
        res.json(result)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

// get product by provider email 
// app.get("/products/category/:cagegory", async(req,res)=>{
//     const category = req.params.cagegory;
//     const quiry = {category:category}
//     const result = await productCollection.find(quiry).toArray();
//     res.json(result)
  
//   })

  const providerTotalProduct = async(req,res)=>{
    try{
        const email = req.params.email;
        const quiry = {provideremail:email}
        const result = await Product.find(quiry);
        res.json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
  }

  const pcategory = async(req,res)=>{
    try{
        const category = req.params.category;
        const quiry = {category:category}
        const result = await Product.find(quiry);
        res.json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
  }

//   delete sample 
// const deleteProvider = async(req,res) =>{
//     try{
//         const id = req.params.id;
//         const query = { _id: mongoose.Types.ObjectId(id) };
//         const result = await Provider.deleteOne(query);
//         res.json({ _id: id, deletedCount: result.deletedCount });

//     } catch (err) {
//         res.status(500).json({ error: err.message });
//       }
// }

//   delete sample 

//   delete product by id 

const deleteservices = async (req,res) =>{
try{
    const id = req.params.id;
    const query = {_id: mongoose.Types.ObjectId(id)};
    const result = await Product.deleteOne(query);
    res.json({_id: id, deletedCount: result.deletedCount})
} catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// post a product

const postProduct = async (req, res) =>{
    try {
        const product = new Product(req.body);
        // console.log(req.body)
        const result = await product.save();
        res.json(result)
    } catch (error) {
        res.status(500).json({ error : error.message })
    }
};




module.exports = {
    postProduct,
  getProduct,
  singleProduct,
  pcategory,
  providerTotalProduct,
  deleteservices
  };