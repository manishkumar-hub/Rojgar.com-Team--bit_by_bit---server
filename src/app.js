const express = require("express");
const app= express();
const PORT= process.env.PORT || 3000 ;
app.use(express.json());
const employeeRouter = require("./routers/employee");
const jobsRouter= require("./routers/jobs");
app.use(employeeRouter);
app.use(jobsRouter);
app.listen(PORT,()=>{
    console.log(`Listening on  ${PORT} `);
})