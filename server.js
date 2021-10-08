const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const Task = require("./Models/Task");
const mongoose = require("mongoose")
const cors = require("cors")



const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())



// mongoose: connect to TaskDB database
mongoose.connect("mongodb://localhost:27017/TaskDB", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log("db Connected");
});

//Record task data route
app.post('/recordTaskData', (req,res)=>{
  
    const task = new Task({
      taskType: req.body.taskType,
      taskTitle: req.body.taskTitle,
      description: req.body.description,
      surbub: req.body.surbub,  
      date: req.body.date,
      taskBudget: req.body.taskBudget,
      budget: req.body.budget
    });
    task.save()
    .catch((err) => console.log(err));
    res.json(('Task saved to db.'));
    
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfullly!")
})