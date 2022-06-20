const express = require("express");

const {
  allOrders,
  postOrder,

} = require("../controllers/orderController");

const router = express.Router();
// allOrders
router.get("/allorder", allOrders);

// get user orders
// router.get("/user/:userId", userOrders);

// post orders
router.post("/postorder", postOrder);

module.exports = router;