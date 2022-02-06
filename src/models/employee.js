const mongoose = require("mongoose");
const validator = require("validator");
// Schema Fields: id, name ,email, phone ,img(opt), qualification ,experience , Occupation
const employeeSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true 
    },
    email :{
        type: String,
        required: true ,
        unique :true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid email")
            }
        }
    },
    phone :{
        type: String,
        required : true ,
        unique: true ,
        validate(value)
        {
            if(!validator.isMobilePhone(value))
            {
                throw new Error("Invalid phone number");
            }
        }
    },
    qualification :{
        type: String ,
        required: false,
    },
    occupation :{
        type: String ,
        required: false,
    },
    experience :{
        type: Number
    }
});

const employee = new mongoose.model("employee",employeeSchema);

module.exports = employee ;