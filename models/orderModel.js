const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({

  
      //   img: {
      //   type: String,
      //   require: true,
      // },

      username: {
        type: String,
        require: true,
      },
      price: {
        type: Number,
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
      providerName:{
        type: String,
        require: true,
      }

   
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = {Order};