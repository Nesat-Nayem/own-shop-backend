const express = require("express");
const {pcategory, singleProduct,  postProduct, getProduct, providerTotalProduct } = require("../controllers/productController");

const router = express.Router()

// regester new user 

// get product 
router.get("/getProduct" , getProduct)

// get single product 
router.get("/singleProduct/:id", singleProduct)

// get product by categore 

router.get("/pcategory/category/:category", pcategory)


// post product 
router.post("/postProduct" , postProduct)

// get product by provider email 

router.get("/providerservices/:email" , providerTotalProduct)

module.exports = router;