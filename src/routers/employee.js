const express = require("express");
// const employee = require("../models/employee");
const employeeRouter = express.Router();
const employeeSchema = require("../models/employee");
const app= express();

app.use(express.json());
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
employeeRouter.post("/signup/employee", (req, res) => {
    const user = new employeeSchema(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(500).send("error in saving " + e);
    })
})
employeeRouter.get("/login/employee", async(req, res) => {
    const user = new employeeSchema(req.body);
    const edata= await employeeSchema.findOne({email : user.email});
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
module.exports = employeeRouter;