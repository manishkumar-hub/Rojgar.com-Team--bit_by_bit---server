const mongoose = require("mongoose");
const validator = require("validator");

const employerSchema = new mongoose.Schema({
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
        type: String ,
        min: 10 ,
        // max: 10 ,
        required: true ,
        unique:true ,
        validate(value)
        {
            if(!validator.isMobilePhone(value))
            {
                throw new Error("Invalid phone number");
            }
        }
    },
    address:{
        type:String,
        required: true
    }
});

// we will create new mongoose.Collection

const employer= new mongoose.model('employer',employerSchema);

module.exports= employer ;
