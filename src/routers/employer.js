const express = require("express");
const employerRouter= express.Router();
const employerSchema= require("../models/employer");

//get employer data
employerRouter.get("/employer",(req,res)=>{
    res.send("Hello from employer router ")
})
//signup
employerRouter.post("/signup/employer",(req,res)=>{
    const user= new employerSchema(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(500).send("error in saving "+e);
    })
})
// login 
employerRouter.get("/login/employer", async(req, res) => {
    const user = new employerSchema(req.body);
    const edata= await employerSchema.findOne({email : user.email});
    if(!edata)
    {
        res.status(404).send("Oops!!... You entered wrong Credentials");
    }
    else{
        if(edata.password=== user.password)
        {
            res.send("login succesful");
        }
        else{
            res.status(400).send("Oops!!... You entered wrong Credentials");
        }
    }
})
module.exports = employerRouter;