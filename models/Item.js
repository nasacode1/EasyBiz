const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: String,
  stockQuantity: {
    type: Number,
    default: 0,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: String, // Assuming a simple username for the reviewer
      text: String,
      rating: Number,
    },
  ],
  imageUrl: String
});

module.exports = mongoose.model("Product", productSchema);
