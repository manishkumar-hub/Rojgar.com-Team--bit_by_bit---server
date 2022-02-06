const express = require("express");
const jobsRouter= express.Router();
// const employeeSchema= require("../models/employee");


jobsRouter.get("/jobs",(req,res)=>{
    res.send("Hello from jobs router ");
})
jobsRouter.post("/jobs",(req,res)=>{
    
})
module.exports = jobsRouter;