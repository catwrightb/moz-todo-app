import Repeat from "react";

function FilterButton(props) {
    return (
        <button onClick={handle2Submit} type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    );
    
}

function handle2Submit(e) {
  e.preventDefault();
  alert("Hello Mars");
}

export default FilterButton;