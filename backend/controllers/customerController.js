const CustModel= require ("../models/customerModel");

const customerSave=async(req, res)=>{
      
    const {name, city, email, password}= req.body;
    try {
        
        const Customer= await CustModel.create({
                     name:name,
                     city:city,
                     email:email,
                     password:password
        })
        
        res.status(200).send(Customer);
    } catch (error) {
        
         res.status(400).send(error);
    }
}
const customerCheck=async(req,res)=>{
    const{email,password}=req.body;
    const data=await CustModel.findOne({email:email});
    if(!data){
        res.send("invalid Email")
    }
    if(data.password==password){
        res.status(200).send(data);
    }
    else{
        res.send("wrong password")
    }
}



module.exports={
    customerSave,
    customerCheck
}

