const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

const tasksRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config({ path: 'config.env' });
const DB = process.env.DBlink;

const app = express();
app.use(express.json());

app.use(morgan('dev'));

//Routes
app.use('/api/v1/tasks', tasksRoutes);
app.use('/api/v1/auth', userRoutes);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('DB connection is established');
  })
  .catch(error => {
    console.log(error);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
