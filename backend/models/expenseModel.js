const mongoose= require("mongoose");
const expenseSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        index: false
    },
    amount:Number,
    description:String,
    date: { type: Date, default: Date.now }
})

module.exports=mongoose.model("expense",expenseSchema);