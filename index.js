import express from 'express';
import mongoose from './shared/moongodb.js';
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from './routes/userRoutes.js';

const app = express();
// Cors
app.use(cors());
//configure env;
dotenv.config();

app.use(express.json());

const port = 9000

app.use(express.json());

app.use('/api', userRoutes);
app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})