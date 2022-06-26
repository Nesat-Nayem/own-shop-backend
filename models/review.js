const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    productId: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
//   photoURL: {
//     type: String,
//     require: true,
//   },
review: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };