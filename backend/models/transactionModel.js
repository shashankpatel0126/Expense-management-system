const mongoose= require("mongoose");

const transactionSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        index: false
    },
    amount:Number,
    source:String,
   
    date: { type: Date, default: Date.now }
})

module.exports=mongoose.model("transaction",transactionSchema);