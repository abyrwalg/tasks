import React from 'react';
import './App.css';
import TasksTable from './components/TasksTable/TasksTable';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  async componentDidMount() {
    const response = await fetch('/api/v1/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    const tasks = await response.json();
    console.log(tasks.data.tasks);
    this.setState({ tasks: tasks.data.tasks });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <TasksTable data={this.state.tasks} />
      </div>
    );
  }
}

export default App;
