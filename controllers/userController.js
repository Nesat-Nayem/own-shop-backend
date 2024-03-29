const bcrypt = require("bcrypt");

const {User} = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");
// const {generateToken} = require("../utils/generateToken")


// get all user 

const getUser = async(req,res) =>{
    try{
        const user = await User.find({})
        res.json(user)
    }catch(err){
        res.status(400).json({erorr : err.message});
    }
}


// get user by email 

// const getmyid = async(req,res) =>{
//     const id = req.params.id;
//     const query = {_id: mongoose.Types.ObjectId(id)};
//     const result = await Provider.find(query)
//     res.json(result)

// }

const getuserbyemail = async(req,res) =>{
    const email = req.params.email;
    const query = {email : email};
    const result = await User.find(query)
    res.json(result)
}

// create new user 

const signup = async(req,res) =>{
    try{
        // const {username, email, password, role, access} = req.body;
        const {email} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            res.status(500).json("User Already Exists")
        }else{


            const user = new User(req.body);
           
            const result = await user.save();
            res.json(result);
               
            // }else{
            //         res.status(400).json("User Already Exists");
            // }
        }
    }catch (err) {
        res.status(500).send(err.message)
    }
};

// singin user 

 const signin = async(req,res) =>{
        try{

            const {email,password} = req.body;
            const user = await User.findOne({email})
            if(user &&(await user.matchPassword(password))){
                res.json({
                    _id:user._id,
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    role:user.role,
                    photoURL:user.photoURL,
                    access:user.access,
                    token:generateToken(user._id),
                });

            } else{
                res.status(500).send("Authentication Failed");
            }
        }catch(err){
            res.status(500).send(err.message);

        }
 };

//  update user access 

const updateUserAccess = async(req,res) =>{
    try {
        const id = req.params.id;
        const filter = { _id: mongoose.Types.ObjectId(id) };
        const updateDoc = { $set: req.body };
        const options = { upsert: true };
        const result = await User.findOneAndUpdate(filter, updateDoc, options);
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

 module.exports = {signup,signin, getUser,getuserbyemail, updateUserAccess};