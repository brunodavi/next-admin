import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  usename: {
    type: String,
    require: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });


const productSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  desc: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  img: {
    type: String,
  },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
