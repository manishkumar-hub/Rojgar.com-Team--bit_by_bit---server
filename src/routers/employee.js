const express = require("express");
// const employee = require("../models/employee");
const employeeRouter = express.Router();
const employeeSchema = require("../models/employee");
const app= express();

app.use(express.json());

employeeRouter.use(express.urlencoded({extended: false}));
employeeRouter.get("/employee/:id",async (req, res) => {
    try {
        // res.send("Hello from employee router ")
        const id = req.params.id;
        const employeeData = await employeeSchema.findById(id);
        if (!employeeData)
        {
            return res.status(500).send("");
        }
        else{ 
            res.send(employeeData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
employeeRouter.post("/registerEmployee", (req, res) => {
    const user = new employeeSchema(req.body);
    // console.log(req.body.name);
    // res.send(user);  
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
    const edata= await employeeSchema.findOne({email : user.email});
    if(!edata)
    {
        // console.log("Email not found");
        res.status(500).send("Oops!!... You entered wrong Credentials");
    }
    else{
        if(edata.password=== user.password)
        {
            // console.log("pasword matched");
            res.send("login succesful");
        }
        else{
            // console.log("Login succesful");
            res.status(500).send("Oops!!... You entered wrong Credentials");
        }
    }
   
})
module.exports = employeeRouter;