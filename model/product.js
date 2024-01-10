import mongoose from "mongoose";
// import { productDoucument }  from '../shared/constant';
// Define a Mongoose schema
const ProductSchema = new mongoose.Schema({
    // user_id, sub_total, phone_number
    user_id: String,
    sub_total: String,
    phone_number: String
});

// Create a Mongoose model
const Products = mongoose.model("Product", ProductSchema);

export default Products;