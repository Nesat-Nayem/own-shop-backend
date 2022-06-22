const express = require("express");
const { creatProvider } = require("../controllers/providerControler");


const router = express.Router()


router.post("/createprovider", creatProvider)


module.exports = router;