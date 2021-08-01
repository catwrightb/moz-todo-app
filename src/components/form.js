import React, {useState} from "react";

function Form(props){
    //useStates creates a state value (name) and a state function (setName), which will update the value
    const [name, setName] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    //e.target represents the element that fired the change event
    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
            </label>
            </h2>
            <input
            onChange = {handleChange}
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={name}
            />
            <button type="submit" className="btn btn__primary btn__lg">
            Add
            </button>
        </form>
    );

    
}





export default Form;