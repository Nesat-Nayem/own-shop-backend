const mongoose = require("mongoose")
const {Schema} = mongoose;

const productSchema = new Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
 
    category:{
        type:String,
        require:true,
    },
    subcategory:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
    longdesc:{
        type:String,
        require:true,
    },
    shrotdesc:{
        type:String,
        require:true,
    },
    providername:{
        type:String,
        require:true,
    },
    provideremail:{
        type:String,
        require:true,
    },
    providernumber:{
        type:Number,
        require:true,
    },




})

const Product = mongoose.model("Product", productSchema)
module.exports = {Product}