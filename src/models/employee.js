const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Inavalid Email")
            }
        }
    },
    phone:{
        type:Number ,
        min: 10 ,
        // max: 10 ,
        requiredt: true ,
        unique:true 
    },
    address:{
        type:String,
        required: true
    }
});

// we will create new mongoose.Collection

const employee= new mongoose.model('employee',employeeSchema);

module.exports= employee ;
