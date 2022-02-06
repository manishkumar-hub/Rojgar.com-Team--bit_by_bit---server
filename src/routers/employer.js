const express = require("express");
const employerRouter= express.Router();
const employerSchema= require("../models/employer");

employerRouter.get("/employer",(req,res)=>{
    res.send("Hello from employer router ")
})
module.exports = employerRouter;