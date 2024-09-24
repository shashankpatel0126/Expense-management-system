const transModel= require("../models/transactionModel");
const expenseModel=require("../models/expenseModel");

const amountSave=async(req, res)=>{
 const {amount, source, date, id}= req.body;
  const transData= await transModel.create({
       user:id,
       amount:amount,
       source:source,
       date:date
  });
  res.send(transData)
}


const displayEarning=async(req, res)=>{
  let id=req.body.id;  
  const trnData= await transModel.find({user:id});
  res.status(200).send(trnData);
}

const displayExpenses=async(req, res)=>{
  let id=req.body.id;  
  const trnData= await expenseModel.find({user:id});
  res.status(200).send(trnData);
}



const expenseSave=async(req, res)=>{
  const {amount, description, date, id }= req.body;

  const myData= new expenseModel({
    amount:amount,
    description:description,
    user:id,
    date:date
  })
  await myData.save();
  res.status(202).send(myData);
}

const displayReports=async(req, res)=>{
  const {startdate, enddate, id}= req.body;
  
  const myData1=await transModel.find({$and:[{user:id}, {
    date: {
      $gte:new Date(JSON.stringify(startdate)) ,
      $lte: new Date(JSON.stringify(enddate))
  }
  }]})

  
  const myData2=await expenseModel.find({$and:[{user:id}, {
    date: {
      $gte:new Date(JSON.stringify(startdate)) ,
      $lte: new Date(JSON.stringify(enddate))
  }
  }]})


 res.status(200).send({mydata1:myData1, mydata2:myData2});
}


module.exports={
    amountSave,
    displayEarning,
    expenseSave,
    displayExpenses,
    displayReports
}