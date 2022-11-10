import express from 'express';
import userRoute from './routes/Users_routes.js'
import materialRoute from './routes/Materials_routes.js'
import indexRoute from './routes/index.js'
import loanRoute from './routes/Loans_route.js'
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_LINK);


// Instantiate the app
const app = express();
//Listing a particular task//Update a task
app.use(express.json());
app.use(cors)
app.use('/users', userRoute);
app.use('/materials', materialRoute);
app.use('/loans', loanRoute);
app.use('/',indexRoute);

// API server listing port 3001
app.listen(3001, function () {
  console.log('API running');
});
export default app;