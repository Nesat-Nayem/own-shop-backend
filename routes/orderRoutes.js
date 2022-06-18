const express = require("express");
const router = express.Router();
const {
  allOrders,
  postOrder,
  userOrders,
} = require("../controllers/orderController");

// allOrders
router.get("/", allOrders);

// get user orders
// router.get("/user/:userId", userOrders);

// post orders
router.post("/", postOrder);

module.exports = router;