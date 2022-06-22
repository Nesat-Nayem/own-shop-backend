
const bcrypt = require("bcrypt");

const {Provider} = require("../models/providerModel");

// create new Provider 

const creatProvider = async(req,res) =>{
    try{
        // const {username, email, password, role, access} = req.body;
        const {email} = req.body;
        const userExists = await Provider.findOne({email});
        if(userExists){
            res.status(500).json("User Already Exists")
        }else{


            const provider = new Provider(req.body);
           
            const result = await provider.save();
            res.json(result);
               
            // }else{
            //         res.status(400).json("User Already Exists");
            // }
        }
    }catch (err) {
        res.status(500).send(err.message)
    }
};

// get all provider 
const getProvider = async(req,res)  =>{
    try{
        const provider = await Provider.find({});
        res.json(provider)
    }catch(err){
            res.status(500).json({error:err.message})
    }
}


module.exports= {creatProvider,getProvider}