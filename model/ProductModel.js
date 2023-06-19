import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: { rate: Number, count: Number },
});

export const ProductModel = new mongoose.model("Product", ProductSchema);
