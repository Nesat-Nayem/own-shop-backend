const express = require("express");
const { creatProvider, getProvider } = require("../controllers/providerControler");


const router = express.Router()


router.post("/createprovider", creatProvider)
router.get("/getprovider", getProvider)


module.exports = router;