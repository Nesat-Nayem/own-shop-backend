const express = require("express");

const {
  allOrders,
  postOrder,
  userOrders,
  orderbymail,
  orderproviderbymail,
 
  categorifilter,
  orderStatus,

} = require("../controllers/orderController");

const router = express.Router();
// allOrders
router.get("/allorder", allOrders);

// get user orders
router.get("/user/:userId", userOrders);

// post orders
router.post("/postorder", postOrder);

router.get("/emailorder/:email" , orderbymail)
router.get("/provideremailorder/:email" , orderproviderbymail)

// fiend order by category search 
router.get("/category/:category", categorifilter)

// update order status 

router.put("/status/:id", orderStatus)

module.exports = router;