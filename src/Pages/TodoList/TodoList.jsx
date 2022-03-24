import React, { useEffect, useState } from "react";
import SecondaryButton from "../../Components/SecondaryButton";
import TodoForm from "./TodoForm";
import "../Styles/TodoList.css";
import Todo from "./Todo";
import Jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import Navbar from "../../Components/Navbar";

const TodoList = (props) => {
  const db = getDatabase();
  const [userNotes, setUserNotes] = useState([]);
  const [userData, setUserData] = useState("");
  const setPages = useNavigate();

  const storage = localStorage.getItem("USER_TOKEN");
  useEffect(() => {
    try {
      if (!storage) {
        setPages("/");
      } else if (storage === "undefined") {
        setPages("/");
      } else {
        const decoding = Jwt(storage);
        onValue(ref(db, `notes/${decoding.ID}`), (snapshot) => {
          const data = [];
          Object.keys(snapshot.val()).map((key) => {
            data.push({
              id: key,
              data: snapshot.val()[key],
            });
          });
          setUserNotes(data);
        });
        setUserData(decoding);
      }
    } catch (e) {
      console.log(e);
    }
  }, [storage, setPages, db]);

  return (
    <div className="todolist">
      <div>
        <Navbar logoutHandler={props.logoutHandler} userData={userData} />
      </div>
      <div className="container-todolist">
        {/* <SecondaryButton className="logout" onClick={props.logoutHandler}>
              LogOut
            </SecondaryButton> */}
        <TodoForm greating={props.greating} userData={userData} />
        <Todo userNotes={userNotes} />
      </div>
    </div>
  );
};

export default TodoList;
