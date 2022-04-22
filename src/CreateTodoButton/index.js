import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const click = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return (
        <button 
        className="CreateTodoButton"
        onClick={click}
        >+</button>
    );
}

export { CreateTodoButton };