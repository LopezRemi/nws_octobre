import express from 'express';
import userRoute from './backend/routes/Users_routes.js'
import materialRoute from './backend/routes/Materials_routes.js'
import indexRoute from './backend/routes/index.js'

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_LINK);


// Instantiate the app
const app = express();
//Listing a particular task//Update a task
app.use(express.json());
app.use('/tasks', userRoute);
app.use('/tasks', materialRoute);
app.use('/',indexRoute);

// API server listing port 3001
app.listen(3001, function () {
  console.log('API running');
});
export default app;