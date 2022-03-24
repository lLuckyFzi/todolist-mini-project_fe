import React, { useEffect, useState } from "react";
import AddButton from "../../Components/AddButton";
import Input from "../../Components/Input";
import "../Styles/TodoForm.css";
import { useForm } from "react-hook-form";
import Fallback from "../../Components/Fallback";
import DayDateInput from "../../Components/DayDateModal";
import Title from "../../Components/Title";
import SecondaryButton from "../../Components/SecondaryButton";
import jwtDecode from "jwt-decode";
import { getDatabase, ref, push } from "firebase/database";

const TodoForm = (props) => {
  const db = getDatabase();
  const [inputDate, setInputDate] = useState(false);
  const [greating, setGreating] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const storage = localStorage.getItem("USER_TOKEN");
  const addSubmitHandler = (data) => {
    const decoding = jwtDecode(storage);
    push(ref(db, `notes/${decoding.ID}`), {
      todo: data.Todo,
      date: data.Date,
      isCompleted: false,
    }).then(() => {
      resetField("Todo");
    });
    setInputDate(false);
  };

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour > 3 && hour <= 12) {
      setGreating("Good Morning");
    } else if (hour > 12 && hour <= 17) {
      setGreating("Good Afternoon");
    } else if (hour > 18 && hour <= 23) {
      setGreating("Good Evening");
    }
  }, []);

  return (
    <div className="container-todo">
      <div className="todo-addInput">
        <div className="greating">
          <p>
            {greating}, {props.userData.firstname}
          </p>
        </div>
        <form onSubmit={handleSubmit(addSubmitHandler)}>
          {inputDate && (
            <div>
              <div
                className="background-modal"
                onClick={() => setInputDate(false)}
              ></div>
              <div className="modalDate">
                <div className="DayDate-Input">
                  <Title className="title">Add Date</Title>
                  <DayDateInput
                    className="date-input"
                    register={register("Date", { required: true })}
                    names={"Date"}
                    type="date"
                  />
                </div>
                <SecondaryButton type="submit" className="date-btn">
                  Add Todo
                </SecondaryButton>
                {errors.Todo && errors.Todo.type === "required" && (
                  <Fallback>⚠️ You must input todo first!</Fallback>
                )}
                {errors.Date && errors.Date.type === "required" && (
                  <Fallback>⚠️ Please Input The Date!</Fallback>
                )}
              </div>
            </div>
          )}
          <div className="add-task">
            <Input
              className="Add-Todo-input"
              placeholder="Add Task"
              register={register("Todo", {
                required: true,
              })}
              names={"Todo"}
              type="text"
            />
            {errors.Todo && errors.Todo.type === "required" && (
              <Fallback>⚠️ Todo cannot be empty!</Fallback>
            )}
            <AddButton onClick={() => setInputDate(true)} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
