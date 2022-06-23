mongoose = require("mongoose")

const bcrypt = require("bcrypt");
// const { default: mongoose } = require("mongoose");

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

const updateProvider = async(req,res) =>{
    try {
        const id = req.params.id;
        const filter = { _id: mongoose.Types.ObjectId(id) };
        const updateDoc = { $set: req.body };
        const options = { upsert: true };
        const result = await Provider.findOneAndUpdate(filter, updateDoc, options);
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

const deleteProvider = async(req,res) =>{
    try{
        const id = req.params.id;
        const query = { _id: mongoose.Types.ObjectId(id) };
        const result = await Provider.deleteOne(query);
        res.json({ _id: id, deletedCount: result.deletedCount });

    } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

// get single provider by id 

// const getmyid = async(req,res) =>{
//     const id = req.params.id;
//     const query = {_id: mongoose.Types.ObjectId(id)};
//     const result = await Provider.find(query)
//     res.json(result)

// }

module.exports= {creatProvider,getProvider,updateProvider,deleteProvider}