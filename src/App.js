
import React, { useState } from "react";
import ToDo from "./components/todo";
import Form from "./components/form";
import Button from "./components/filterButton";
import {nanoid} from 'nanoid'

function App(props) {

  const [task, setTask] = useState(props.task);

  function addTask(name) {

    //nanoid - libaray to make unique identifiers
    const newTask = {id:"id-"+nanoid(), name: name, completed:false};
    setTask([...task, newTask]);
  }


  // if we use <task.name> then we only get the name of the task
  //pass in the <ToDo /> component from the map function
  //to pass all the props we need to list them after ToDo
  //we need a unique key passed in as well for iteration to work
  const taskList = task.map(task => (
    <ToDo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );

  const taskNoun = taskNounUse();

  const headingText = `${taskList.length} ${taskNoun} remaining`

  function taskNounUse() {
    if(taskList.length !== 1){
        return 'tasks';
    }
    else{
      return 'task';
    }
    
  }


    const buttonList = props.btn.map(btn => <Button
      id={btn.id} 
      name={btn.name}
      key={btn.id}
      />);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
     
        {buttonList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >

        {taskList}
        {/* the const taskList replaces the below code */}
        {/* <ToDo name="Eat" completed={false} id="todo-1"/>
        <ToDo name="Sleep" completed={false} id="todo-2"/>
        <ToDo name="Repeat" completed={false} id="todo-3"/> */}
      </ul>
    </div>
  );
}

export default App;
