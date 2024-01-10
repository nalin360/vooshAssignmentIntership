import express from 'express';
import mongooseConnection from './shared/moongodb.js';
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
mongooseConnection()
const PORT = process.env.PORT

app.use(express.json());

app.use(mainEndpoint, userRoutes);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})