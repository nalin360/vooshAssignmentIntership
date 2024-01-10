import express from 'express';
const router = express.Router();
import { registerUser } from '../Controller/userController.js';
import { loginUser } from '../Controller/AuthController.js';
import { addOrder } from '../Controller/ProductController.js';
// For new user: url/add-user (POST request)
router.post('/add-user',registerUser)

// For Login user: url/login-user (POST request)
router.post('/login-user', loginUser);

// For adding new order: url/add-order (POST request)
router.post('/add-order',addOrder);

const userRoutes = router
export default userRoutes