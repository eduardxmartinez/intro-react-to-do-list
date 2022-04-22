import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "./TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { MyLoader } from "../Loader";


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <MyLoader/>}
        {error && <p>desesperate, hay un error...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
        {searchedTodos.map(todo => (
          < TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton
      setOpenModal={setOpenModal} />

    </React.Fragment>
  );
}

export { AppUI };