const express = require("express");
const router = express.Router()
const { creatProvider, getProvider,updateProvider, deleteProvider,getmyid } = require("../controllers/providerControler");





router.post("/createprovider", creatProvider)
router.get("/getprovider", getProvider)
router.put("/updateprovider/:id", updateProvider)
router.delete("/deleteProvider/:id", deleteProvider)
// get provider by id 
router.get("/getproviderid/:id", getmyid)


module.exports = router;