import React from "react";
import { useTodos } from "./useTodos.js";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { MyLoader } from "../Loader";
import { TodoHeader } from "../TodoHeader";
import { TodoError } from "../TodoError";
import { EmptyTodos } from "../EmptyTodos"
import { EmptySearch } from "../EmptySearch"
import { ChangeAlert } from "../ChangeAlert"


function App() {
  const {
    states,
    stateSetters
  } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal
  } = states;

  const {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    syncTodos
  } = stateSetters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onEror={() => <TodoError />}
        onLoading={() => <MyLoader />}
        onEmpty={() => <EmptyTodos />}
        onEmptySearch={() => <EmptySearch
          text={searchValue}
           />}

        // render={todo => (
        //   < TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {todo => (
          < TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {/* <TodoList>
        {loading && <MyLoader />}
        {error && <TodoError/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}

        {searchedTodos.map(todo => (
          < TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal} />

      <ChangeAlert
        sync={syncTodos}
      />

    </React.Fragment>
  );
}

export default App;
