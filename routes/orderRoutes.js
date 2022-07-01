const express = require("express");

const {
  allOrders,
  postOrder,
  userOrders,
  orderbymail,
  orderproviderbymail,

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

module.exports = router;