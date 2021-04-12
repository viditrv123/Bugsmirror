require('dotenv').config();

const express=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true}).then(()=>{
    console.log("DB connected");
});

const app=express();

app.use(bodyParser.json());


const authRoutes=require("./routes/auth");


app.use("/api",authRoutes);

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});