const express = require("express");
const app= express();
const PORT= process.env.PORT || 3000 ;
app.use(express.json());
const employeeRouter = require("./routers/employee");

app.use(employeeRouter);

app.listen(PORT,()=>{
    console.log(`Listening on  ${PORT} `);
})