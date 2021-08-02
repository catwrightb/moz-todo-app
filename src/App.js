
import React, { useRef, useState, useEffect } from "react";
import ToDo from "./components/todo";
import Form from "./components/form";
import FilterButton from "./components/filterButton";
import {nanoid} from 'nanoid'

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;

}

function App(props) {
  //this needs to be set to 'All' not props.name in order for the .filter on the task to work
  const [filter, setFilter] = useState('All');
  const [task, setTask] = useState(props.task);

  const listHeadingRef = useRef(null);
  const prevTaskLenght = usePrevious(task.length);

  

  function addTask(name) {
    //nanoid - libaray to make unique identifiers
    const newTask = {id:"id-"+nanoid(), name: name, completed:false};
    setTask([...task, newTask]);
  }

  function editTask(id, newName) {
    const editTask = task.map(task => {
      //if the edit task has the same id as the task
      if (id === task.id) {
        return {... task, name: newName}
      }
      return task;
    });

    setTask(editTask)

  }

  function deleteTask(id) {
    const remainingTask = task.filter(task => id !== task.id);
    setTask(remainingTask);
    
  }


  function toggleTaskCompleted(id) {
    const updatedTasks = task.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTask(updatedTasks);
  }
  //test
  // if we use <task.name> then we only get the name of the task
  //pass in the <ToDo /> component from the map function
  //to pass all the props we need to list them after ToDo
  //we need a unique key passed in as well for iteration to work
  const taskList = task
  .filter(FILTER_MAP[filter])
  .map(task => (
    <ToDo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
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
  
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  useEffect(()=>{
    if (task.length - prevTaskLenght === -1) {
      listHeadingRef.current.focus();
    }
  }, [task.length, prevTaskLenght]);

    // const buttonList = props.btn.map(btn => <Button
    //   id={btn.id} 
    //   name={btn.name}
    //   key={btn.id}
    //   />);

     /*we can make any element programmatically focusable by adding the attribute tabindex="-1" to it*/
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
     
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
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
