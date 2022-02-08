const express = require("express");
const employerRouter= express.Router();
const employerSchema= require("../models/employer");

//get employer data
employerRouter.get("/employer",(req,res)=>{
    res.send("Hello from employer router ")
})
//signup
employerRouter.post("/registeremployer",(req,res)=>{
    const user= new employerSchema(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        console.log(e);
        res.status(404).send("error in saving "+e);
    })
})
// login 
employerRouter.post("/loginemployer", async(req, res) => {
    const user = new employerSchema(req.body);
    const edata= await employerSchema.findOne({email : user.email});
    // console.log("edata: "+ edata);
    if(edata==null)
    {
        console.log("Email not found");
        res.status(500).send({"test":"false" });
    }
    else{
        if(edata.password=== user.password)
        {
            res.send({test: true });
        }
        else{
            // console.log("Login succesful");
            res.status(500).send({test: false });
        }
    }
})
module.exports = employerRouter;