import React from "react";
import Fallback from "../../Components/Fallback";
import List from "../../Components/List";
import "../Styles/Todo.css";

const Todo = (props) => {
  const { userNotes } = props;

  return (
    <div className="todo">
      {userNotes.length === 0 ? (
        <Fallback className={"fallback-list"}>No List</Fallback>
      ) : (
        <div>
          <div className="on-going">
            <p>On Going</p>
            {userNotes.map(
              (todo) =>
                todo.data.isCompleted === false && (
                  <div key={todo.id}>
                    <List
                      id={todo.id}
                      todo={todo.data.todo}
                      date={todo.data.date}
                      isCompleted={todo.data.isCompleted}
                    />
                  </div>
                )
            )}
          </div>
          <div className="complete">
            <p>Completed</p>
            {userNotes.map(
              (todo) =>
                todo.data.isCompleted === true && (
                  <div key={todo.id}>
                    <List
                      id={todo.id}
                      todo={todo.data.todo}
                      date={todo.data.date}
                      isCompleted={todo.data.isCompleted}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
