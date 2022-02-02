import React from "react";

const Form = ({ todos, setTodos, setInputText, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className="create-task-container">
        <input
          type={"text"}
          className="todo-input"
          value={inputText}
          id="task-input-field"
          onChange={inputTextHandler}
          placeholder="Enter Task"
        ></input>
        <button
          className="todo-button"
          id="submit-btn"
          type="submit"
          onClick={submitTodoHandler}
        >
          Submit
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value={"all"}>All</option>
          <option value={"completed"}>Completed</option>
          <option value={"uncompleted"}>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
