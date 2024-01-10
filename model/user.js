import mongoose from "mongoose";
// import { userDocument } from '../shared/constant';
// Define a Mongoose schema
const UserSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    password: String
});

// Create a Mongoose model

const User = mongoose.model("Users", UserSchema);

export default User