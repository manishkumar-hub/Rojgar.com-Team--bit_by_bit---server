const express = require("express");
const employerRouter= express.Router();
const employerSchema= require("../models/employer");

employerRouter.get("/employer",(req,res)=>{
    res.send("Hello from employer router ")
})
employerRouter.post("signup/employer",(req,res)=>{
    const user= new employerSchema(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(500).send("error in saving "+e);
    })
})
module.exports = employerRouter;