const express = require("express");
const { signup, signin } = require("../controllers/userController");
// const {singup,singin} = require("..controlars/usercontrolar")
const router = express.Router()

// regester new user 

router.post("/signup" , signup)

// Login exasting user 

router.post("/signin", signin)

module.exports = router;