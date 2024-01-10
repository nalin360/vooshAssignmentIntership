import express from 'express';
// import dbconnection from "./shared/moongod.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';

import userRoutes from './routes/userRoutes.js';
import { mainEndpoint } from './shared/constant.js';

const app = express();
// Cors
app.use(cors());
//configure env;
dotenv.config();
app.use(express.json());
app.use(express.json());
const PORT = process.env.PORT
// dbconnection()
mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
app.use(mainEndpoint, userRoutes);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})