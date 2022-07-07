const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
      username: {
        type: String,
        require: true,
      },
      userId:{
        type: String,
        require:true,
      },
      serviceId:{
        type: Number,
        require:true,
      },
      
      email: {
        type: String,
        require: true,
      },
      userAddress: {
        type: String,
        require: true,
      },
      userRegion: {
        type: String,
        require: true,
      },
      userNumber: {
        type: Number,
        require: true,
      },

      price: {
        type: Number,
        require: true,
      },
      category: {
        type: String,
        require: true,
      },
    
      serviceName: {
        type: String,
        require: true,
      },
      status:{
        type: String,
        require: true,
      },
      // currentDate:{
      //   type: Date,
      //   require: true,
      // },
      providerName:{
        type: String,
        require: true,
      },
      providerEmail:{
        type: String,
        require: true,
      },
      providerNumber:{
        type: Number,
        require: true,
      },
      serviceImg: {
        type: String,
        require: true,
      },

   
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = {Order};