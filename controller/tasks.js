const tasks = require("../routes/tasks");
const Task = require('../models/Task')

const getAllTasks =  async (req, res) => {
  try {
    const tasks = await  Task.find({})
    res.status(200).json({tasks})

  } catch  (error) {
    res.status(500).json({ msg: error })

  }
  // res.send("all items task");
};

// this is for create element -------------
const createTask = async(req, res) => {
  try {
    const task = await Task.create (req.body)
  res.status(201).json({task})

  } catch  (error) {
    res.status(500).json({ msg: error })

  }
  
  // res.json(req.body)
};

// this is for get api get the data-------
const getTask =   async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID},req.body,{

      new:true,
      // this is using for with patch api in fronted----
      runValidators:true,
    })
    res.status(200).json({id:req.params.id});
  if (!task){
    return res.status(400).json({msg:`No task with id:${taskID}`})
  }
  // res.status(200).send()
  res.status(200).json({task})


  } catch (error) {
    res.status(500).json({ msg: error })

  }

};
// Delete api---------

const deleteTask =  async (req, res) => {
  try {
    const {id:taskID} = req.params;

    const task = await Task.findByIdAndDelete({_id:taskID});
    res.status(200).json({id:req.params.id});
  if (!task){
    return res.status(400).json({msg:`No task with id:${taskID}`})
  }
res.status(200).json({task})


  } catch  (error) {
    res.status(500).json({ msg: error })

  }
  // res.send("deleteing  task");
};

// for updating the task
const updateTask = async (req, res) => {
  try {
    const {id:taskID} =  req.params;
  
    const task =  await Task.findByIdAndUpdate({_id:taskID},req.body)
    // res.status(200).json({id:req.params.id});
  if (!task){
    return res.status(400).json({msg:`No task with id:${taskID}`})
    }
    res.status(200).json({task})

  } catch (error) {
    res.status(500).json({ msg: error })

  }


};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
