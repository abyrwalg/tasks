const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  estimated: {
    type: Date
  },
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Types.ObjectId,
    //required: true,
    ref: 'User'
  }
});

const Task = mongoose.model('Task', tasksSchema);
module.exports = Task;
