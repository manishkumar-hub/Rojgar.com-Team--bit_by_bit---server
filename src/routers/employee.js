const express = require("express");
const employeeRouter= express.Router();
const employeeSchema= require("../models/employee");


employeeRouter.get("/employee/:id",(req,res)=>{
    
})
module.exports = employeeRouter;