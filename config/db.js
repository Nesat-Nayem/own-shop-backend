require ("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
        await mongoose.connect(uri = "mongodb+srv://trusell:KydYhnXqPsjQRVgA@cluster0.hty68.mongodb.net/?retryWrites=true&w=majority")
        console.log('database connected')
    }catch{
        console.log(error.message);
    }
}

module.exports = connectDB;