const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  blogId: {
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
  text: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };