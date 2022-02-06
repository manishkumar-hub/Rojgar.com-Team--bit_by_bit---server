const mongoose = require("mongoose");
const validator = require("validator");
// Schema fields:id job title, job description, date of posting , salary, openings
const jobSchema= new mongoose.Schema({
    title:{
        type: String,
        required:true 
    },
    description :{
        type: String,
        required: true
    },
    date :{
        type: Date,
        required : true 
    },
    salary :{
        type: Number ,
        required: true,
    },
    openings :{
        type: Number ,
        required: true
    },
    experienceRequired :{
        type: Number,
        required: false
    }
});

const job = new mongoose.model("job",jobSchema);

module.exports = job;