const express = require("express");
const employeeRouter= express.Router();
const employeeSchema= require("../models/employee");

employeeRouter.get("/employee",(req,res)=>{
    res.send("Hello from employee router ")
})
module.exports = employeeRouter;