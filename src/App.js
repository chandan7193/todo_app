import React, { Component } from 'react';
import Header from './components/header/';
import TaskBar from './components/taskbar/';
import TaskList from './components/tasklist/';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <div className="center">
        <Header />
        <TaskBar />
        <TaskList />
        </div>
      </div>

    );
  }
}

export default App;
