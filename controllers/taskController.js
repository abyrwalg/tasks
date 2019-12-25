const Task = require('../models/Task');

exports.getAllTasks = async function(req, res) {
  try {
    const tasks = await Task.find();
    res.json({
      status: 'success',
      data: {
        tasks
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.addTask = async function(req, res) {
  try {
    const task = await Task.create(req.body);
    res.json({
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.getTask = async function(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    res.json({
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.updateTask = async function(req, res) {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.json({
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.deleteTask = async function(req, res) {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};
