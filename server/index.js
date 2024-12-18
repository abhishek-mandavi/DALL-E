import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/' , async (req,res) => {
    res.send('Hello Backend!');
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(6080, () => console.log('Server has started on port http://localhost:6080'))
    } catch (error) {
        console.log(error);
    }
    
}