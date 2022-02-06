const express = require("express");
// const employee = require("../models/employee");
const employeeRouter = express.Router();
const employeeSchema = require("../models/employee");

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
module.exports = employeeRouter;