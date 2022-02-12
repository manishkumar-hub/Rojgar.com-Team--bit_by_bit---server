const express = require("express");
const employerRouter= express.Router();
const employerSchema= require("../models/employer");
const app= express();

app.use(express.json());
employerRouter.use(express.urlencoded({extended: false}));

//signup
employerRouter.post("/registeremployer",(req,res)=>{
    const user= new employerSchema(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        console.log(e);
        res.status(404).send("error in saving "+e);
    })
})
// login 
employerRouter.post("/loginemployer", async(req, res) => {
    const user = new employerSchema(req.body);
    const {email, password} = user;
    if(!email || !password )
    {
        // console.log(`Cokkies : ${req.cookies.myname}`);
       return res.status(500).send("Oops!!... You entered wrong Credentials");
    } 
    const edata= await employerSchema.findOne({email : user.email});
    // console.log("edata: "+ edata);
    if(edata==null)
    {
        console.log("Email not found");
        res.status(500).send(); 
    }
    else{
        if(edata.password=== user.password) 
        {
            console.log("Login succesful");
            const id= edata._id.toString();
            console.log("id= "+ id);
            res.status(200).send({"ID":id});
        }
        else{
            res.status(500).send();
        }
    }
})


//get employer data
employerRouter.get("/employer/:id",async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`Id== `+ id);
        const employerData = await employerSchema.findById(id);
        if (!employerData)
        { 
             console.log("Data not found for given ID");
            res.status(500).send("");
        } 
        else{  
            // console.log(`Edata : ${employerData}`);
            res.status(200).send(employerData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = employerRouter;