const express = require("express");
const mongoose=require("mongoose");
const app= express();
const dotenv=require('dotenv');
const bodyparser = require('body-parser');

dotenv.config();
var cors = require('cors');
const PORT=process.env.PORT || 8000
app.use(cors());

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("MongoDB connected!!!");
})


app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const customerRoute= require("./routes/customerRoute");
const transactionRoute= require("./routes/transactionRoute");

app.use("/transactions", transactionRoute);
app.use("/customer", customerRoute);



app.listen(PORT, ()=>{
    console.log(`server is running.... ${PORT}`)
})