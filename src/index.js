
//require('dotenv').config({path: './.env'})  
import dotenv from 'dotenv'
import connectDB from './db/index.js'
//import mongoose from 'mongoose'
import { DB_NAME } from  './constants.js';
  
dotenv.config({
    path: './.env'})
    console.log('MONGO_URI:', process.env.MONGO_URI);
    console.log('DB_NAME:', DB_NAME);


connectDB()



/*import express from 'express'
const app = express() 
// Connect to MongoDB but async await should be used because databse is in another continent
; (async()=>{
    try {
      await  mongoose.connect('${process.env.MONGO_URI}/${DB_NAME}')
      app.on('error', (error) => { 
        console.error('MongoDB connection error:', error);
        throw error;
      })
    

    app.listen(process.env.PORT,() => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
} catch(error){
        console.error("ERROR:",error)
    throw err}
})()
    */
   // this way we can do directly but it is unprofessional
