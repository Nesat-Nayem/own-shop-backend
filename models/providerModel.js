const mongoose = require("mongoose");
const { Schema } = mongoose;

const providerSchema = new Schema(
    {
        username: {
          type: String,
          require: true,
        },
        email: {
          type: String,
          unique: true,
          require: true,
        },
        companyName: {
          type: String,
          trim: true,
        },
        companyWebsite: {
          type: String,
          trim: true,
        },
     
        password: {
          type: String,
          require: true,
        },
        photoURL: {
          type: String,
    
        },
    
    
        phone: {
          type: Number,
      
        },
        access: {
          type: String,
          require: true,
    
        },
        role: {
          type: String,
          require: true,
        },
        location: {
          type: String,
          trim: true,
        }
      },
      {
        timestamps: true,
      }
)

const Provider = mongoose.model("Provider", providerSchema)
module.exports = {Provider}