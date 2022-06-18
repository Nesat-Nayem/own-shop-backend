const express = require("express");
const { signup, signin, getUser } = require("../controllers/userController");
// const {singup,singin} = require("..controlars/usercontrolar")
const router = express.Router()

// regester new user 

router.post("/signup" , signup)

// Login exasting user 

router.post("/signin", signin)


router.get("/alluser", getUser)

module.exports = router;