import express from 'express';
import dbconnection from './shared/moongodb.js';
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from './routes/userRoutes.js';
import { mainEndpoint } from './shared/constant.js';

const app = express();
// Cors
app.use(cors());
//configure env;
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT
dbconnection()
app.use(express.json());

app.use(mainEndpoint, userRoutes);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})