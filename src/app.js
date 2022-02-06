const express = require("express");
const app= express();
const PORT= process.env.PORT || 3000 ;
require("./db/conection");
app.use(express.json());
const employerRouter = require("./routers/employer");
const employeeRouter = require("./routers/employee");
const jobsRouter= require("./routers/jobs");
app.use(employerRouter);
app.use(employeeRouter);
app.use(jobsRouter);
app.listen(PORT,()=>{
    console.log(`Listening on  ${PORT} `);
})