const mongoose = require("mongoose");
const DB= "mongodb://localhost/rojgar";

mongoose.connect(DB,{
    useNewUrlParser: true ,
    // useCreateIndex: true ,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection with Db is succesful");
}).catch((e)=>{
    console.log("Error in conn with DB" + e);
});