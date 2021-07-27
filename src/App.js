
import ToDo from "./components/todo";

function App(props) {

  // if we use <task.name> then we only get the name of the task
  //pass in the <ToDo /> component from the map function
  //to pass all the props we need to list them after ToDo
  //we need a unique key passed in as well for iteration to work
  const taskList = props.task.map(task => <ToDo 
    id={task.id} 
    completed={task.completed} 
    name={task.name}
    key={task.id}
    />);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
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
