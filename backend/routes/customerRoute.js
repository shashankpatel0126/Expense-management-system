const express=require ("express")
const router= express.Router();

const customerController=require("../controllers/customerController")


router.post("/customersave", customerController.customerSave );


router.post("/customerCheck", customerController.customerCheck );


module.exports=router;