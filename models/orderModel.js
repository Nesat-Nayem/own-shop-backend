const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    category: {
      type: String,
   
    },

  
    desc: {
        type: String,
        require: true,
      },

      id: {
        type: Number,
        require: true,
    },
        img: {
        type: String,
        require: true,
      },
      location: {
        type: String,
        require: true,
      },
      name: {
        type: String,
        require: true,
      },
      price: {
        type: Number,
        require: true,
      },
      review: {
        type: Number,
        require: true,
      },
      _id: {
        type: Number,
        require: true,
      },
   
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;