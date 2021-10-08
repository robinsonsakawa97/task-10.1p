
const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        taskType: String,
        taskTitle: String,
        description: String,
        surbub: String,  
        date: String,
        taskBudget: String,
        budget: String
    }
)

module.exports  =  mongoose.model("Task", taskSchema)