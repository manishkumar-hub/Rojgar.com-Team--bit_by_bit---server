const express = require("express");
const jobsRouter= express.Router();
// const employeeSchema= require("../models/employee");


jobsRouter.get("/jobs",(req,res)=>{
    res.send("Hello from jobs router ")
})
module.exports = jobsRouter;