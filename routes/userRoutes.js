import express from 'express';
const router = express.Router();
import { registerUser } from '../Controller/userController.js';
import { loginUser } from '../Controller/AuthController.js';
import { addOrder, getOrder } from '../Controller/ProductController.js';
import { addOrderEndPoint, getOrderEndPoint, loginUserEndPoint, registerUserEndPoint } from '../shared/constant.js';
// For new user: url/add-user (POST request)
router.post(registerUserEndPoint,registerUser)

// For Login user: url/login-user (POST request)
router.post(loginUserEndPoint, loginUser);

// For adding new order: url/add-order (POST request)
router.post(addOrderEndPoint,addOrder);

// Get order detail: url (GET request)
router.post(getOrderEndPoint , getOrder)

const userRoutes = router
export default userRoutes