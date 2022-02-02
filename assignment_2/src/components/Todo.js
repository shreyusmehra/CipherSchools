import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="todo">
        <ul className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </ul>
        <button className="complete-btn" onClick={completeHandler}>
          &#10004;
        </button>
        <button className="trash-btn" onClick={deleteHandler}>
          &#x2717;
        </button>
      </div>
      <br />
    </>
  );
};

export default Todo;
