import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const click = () => {
        alert("hola");
    }
    return (
        <button 
        className="CreateTodoButton"
        onClick={click}
        >+</button>
    );
}

export { CreateTodoButton };