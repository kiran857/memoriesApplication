import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app=express();

app.use('/posts',postRoutes);

app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

//www.monodb.com (connection create with DB)

const  CONNECTION_URL="mongodb+srv://shindekiran:shindekiran@cluster0.n32fe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server is Running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));

//mongoose.set('useFindAndModify',false);
