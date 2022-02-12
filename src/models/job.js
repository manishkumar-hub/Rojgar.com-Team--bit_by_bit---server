const mongoose = require("mongoose");
const validator = require("validator");
// Schema fields:title,description,date,salary,openings,experienceRequired
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
        default: Date.now 
    },
    salary :{
        type: Number ,
        required: true,
    },
    openings :{
        type: Number ,
        required: true
    },
    gmail:{
        type: String,
        required:true 
    },
    contactNumber: {
        type: Number,
        required: true
    },
    userApplied: {
        type: Array,
    },
    experienceRequired :{
        type: Number,
        required: false
    }
});

const job = new mongoose.model("job",jobSchema);

module.exports = job;