const express = require("express");
const employeeRouter = express.Router();
const employeeSchema = require("../models/employee");
const app= express();
const cookieParser= require('cookie-parser');
app.use(express.json());

employeeRouter.use(cookieParser());
employeeRouter.use(express.urlencoded({extended: false}));

employeeRouter.post("/registerEmployee", (req, res) => {
    const user = new employeeSchema(req.body);
    user.save().then(() => {
        res.status(201).send(user);   
        console.log(user);
    }).catch((e) => {
        console.log(e);
        res.status(404).send("error in saving " + e);
    })
})
employeeRouter.post("/loginemployee", async(req, res) => {
    const user = new employeeSchema(req.body);
    const {email, password} = user;
    if(!email || !password )
    {
        // console.log(`Cokkies : ${req.cookies.myname}`);
       return res.status(500).send("Oops!!... You entered wrong Credentials");
    }
    const edata= await employeeSchema.findOne({email : user.email});
    if(!edata)
    {
        // console.log("Email not found");
        res.status(500).send("Oops!!... You entered wrong Credentials");
    }
    else{
        if(edata.password=== user.password)
        {
            const id= edata._id.toString();
            res.status(200).send({"ID":id});
        }
        else{
            res.status(500).send("Oops!!... You entered wrong Credentials"); 
        }
    }
    
})
employeeRouter.get("/employee/:id",async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`Id== `+ id);
        const employeeData = await employeeSchema.findById(id);
        if (!employeeData)
        { 
             console.log("Data not found for given ID");
            res.status(500).send("");
        } 
        else{  
            console.log(`Edata : ${employeeData}`);
            res.status(200).send(employeeData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = employeeRouter;