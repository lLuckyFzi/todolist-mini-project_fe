import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "./API/API";
import "./App.css";
import NotFoundPages from "./Components/NotFoundPages";
import Notify from "./Components/Notify";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import TodoList from "./Pages/TodoList/TodoList";

const App = () => {
  const changePages = useNavigate();

  const loginHandler = (data) => {
    API.post(`login`, {
      email: data.email,
      password: data.password,
    }).then((data) => {
      if (data.data.msg) {
        toast.error(data.data.msg);
      } else {
        localStorage.setItem("USER_TOKEN", data.data.token);
        changePages("/todolist");
        toast.success("Login Berhasil");
      }
    });
  };

  const onSignUpHandler = (data) => {
    API.post("createUser", {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem("USER_TOKEN");
    changePages("/");
    toast.success("LogOut Berhasil!");
  };

  return (
    <div className="App">
      <Notify />
      <Routes>
        <Route
          path="/signup"
          element={<SignUp onSignUpHandler={onSignUpHandler} />}
        />
        <Route
          path="/"
          element={<Login changepg={changePages} onLogin={loginHandler} />}
        />

        <Route
          path="/todolist"
          element={<TodoList logoutHandler={logoutHandler} />}
        />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </div>
  );
};

export default App;
