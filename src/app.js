const express = require("express");
const app= express();
const PORT= process.env.PORT || 3000 ;
app.use(express.json());
const employerRouter = require("./routers/employer");
const jobsRouter= require("./routers/jobs");
app.use(employerRouter);
app.use(jobsRouter);
app.listen(PORT,()=>{
    console.log(`Listening on  ${PORT} `);
})