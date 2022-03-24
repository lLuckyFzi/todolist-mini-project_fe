import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormTitle from "../../Components/FormTitle";
import InputForm from "../../Components/InputForm";
import PrimaryButton from "../../Components/PrimaryButton";
import SecondaryButton from "../../Components/SecondaryButton";
import Fallback from "../../Components/Fallback";
import "../Styles/Login.css";
import Title from "../../Components/Title";

const Login = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [emailChange, setEmailChange] = useState("");
  const [passChange, setPassChange] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailHandler = (e) => {
    setEmailChange(e.target.value);
    if (passChange.length > 2) {
      setDisabled(false);
    } else if (passChange.length < 2) {
      setDisabled(true);
    }
  };

  const passHandler = (e) => {
    setPassChange(e.target.value);
    if (emailChange.length > 2) {
      setDisabled(false);
    } else if (emailChange.length < 2) {
      setDisabled(true);
    }
  };

  const onSubmitHandler = (data) => {
    props.onLogin(data);
  };

  return (
    <div className="container-login-form">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Title className="login-title">Todo List</Title>
        <FormTitle>Login</FormTitle>
        <div className="link">
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <PrimaryButton>Sign Up?</PrimaryButton>
          </Link>
        </div>
        <InputForm
          placeholder="Email"
          register={register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            onChange: emailHandler,
          })}
          names={"email"}
          type="text"
        />
        {errors.email && errors.email.type === "required" && (
          <Fallback>⚠️ Email tidak boleh kosong!</Fallback>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <Fallback>⚠️ Harus Berupa Email!</Fallback>
        )}
        <InputForm
          placeholder="Password"
          names={"password"}
          register={register("password", {
            required: true,
            minLength: 6,
            onChange: passHandler,
          })}
          type="password"
        />
        {errors.password && errors.password.type === "required" && (
          <Fallback>⚠️Password tidak boleh kosong</Fallback>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <Fallback>⚠️Password Minimal 6 Karakter</Fallback>
        )}

        <SecondaryButton disabled={disabled} type="submit">
          Login
        </SecondaryButton>
      </form>
    </div>
  );
};

export default Login;
