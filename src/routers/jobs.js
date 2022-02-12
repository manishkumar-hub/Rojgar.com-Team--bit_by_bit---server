const express = require('express');
const { json } = require('express/lib/response');
const jobsRouter = express.Router()
const jobsSchema = require('../models/job')

// jobsRouter.use(express.json());
// jobsRouter.use()
const app= express();
app.use(express.json());

jobsRouter.get('/jobs', async(req, res) => {
      try{
         const jobs= await jobsSchema.find();
         res.status(200).send(jobs);
         
      }catch(e){
           res.status(500).send(e);
      }
})

jobsRouter.post('/jobs', async (req, res) => {
  try {
    // console.log(req.body.chackval)
    const jobs = new jobsSchema(req.body)
    console.log(jobs)
    jobs.save()
    res.send(jobs)
    // console.log(jobs.id);

  } catch (e) {
    res.status(400).send(e)
  }
})
 
// this jobs:/id is not working 
jobsRouter.get('/jobs/:id', async (req, res) => {
  try {
    const id = req.params.id
    const jobs = await jobsSchema.findById(id)
    res.send(jobs);
  } catch (e) {
      console.log(e);
    res.status(500).send(e)
  }
})

jobsRouter.patch('/jobs', (req, res) => {
      


})

module.exports = jobsRouter