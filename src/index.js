import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const BUTTON_DATA = [
  { id: "b1", name: "All"  },
  { id: "b2", name: "Active" },
  { id: "b3", name: "Completed" }
]

const TODO_DATA = [
  { id: "todo-0", name: "Eat", completed: false },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
]

console.log(TODO_DATA);

ReactDOM.render(

    <App task={TODO_DATA} btn={BUTTON_DATA}/>,
  
  document.getElementById('root')
);

