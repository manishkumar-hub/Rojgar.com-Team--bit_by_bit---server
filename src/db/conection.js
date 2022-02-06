const mongoose = require("mongoose");
const DB= "mongodb+srv://manishkumar12:Manish%40122%23@cluster0.1okix.mongodb.net/RestfulAPI?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser: true ,
    // useCreateIndex: true ,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection with Db is succesful");
}).catch((e)=>{
    console.log("Error in conn with DB" + e);
});