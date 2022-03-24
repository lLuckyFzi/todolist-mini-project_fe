import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Fallback from "../../Components/Fallback";
import FormTitle from "../../Components/FormTitle";
import InputForm from "../../Components/InputForm";
import PrimaryButton from "../../Components/PrimaryButton";
import SecondaryButton from "../../Components/SecondaryButton";
import Title from "../../Components/Title";
import "../Styles/SignUp.css";

const SignUp = (props) => {
  const [passwordInput, setPasswordInput] = useState("");
  const [conPasswordInput, setConPasswordInput] = useState("");
  const [isNotValid, setIsNotValid] = useState();
  const completed = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const passwordHandler = (e) => {
    setPasswordInput(e.target.value);
  };
  const conPasswordHandler = (e) => {
    setConPasswordInput(e.target.value);
  };

  const signInSubmitHandler = (data) => {
    if (passwordInput !== conPasswordInput) {
      setIsNotValid(true);
    } else {
      props.onSignUpHandler(data);
      setIsNotValid(false);
      completed("/");
      toast.success("Daftar Berhasil!");
    }
  };

  return (
    <div className="container-sigup-form">
      <form onSubmit={handleSubmit(signInSubmitHandler)}>
        <Title className="signup-title">Todo List</Title>
        <FormTitle>Sign Up</FormTitle>
        <div className="link">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <PrimaryButton>Login?</PrimaryButton>
          </Link>
        </div>
        <div className="input-name">
          <div className="firstname">
            <InputForm
              placeholder="First Name"
              width="243"
              className="signup-firstname"
              register={register("firstname", { required: true })}
              names={"firstname"}
              type="text"
            />
            {errors.firstname && errors.firstname.type === "required" && (
              <Fallback>⚠️ Tidak Boleh Kosong</Fallback>
            )}
          </div>
          <div className="lastname">
            <InputForm
              placeholder="Last Name"
              width="243"
              className="signup-lastname"
              register={register("lastname", { required: true })}
              names={"lastname"}
              type="text"
            />
            {errors.lastname && errors.lastname.type === "required" && (
              <Fallback>⚠️ Tidak Boleh Kosong!</Fallback>
            )}
          </div>
        </div>
        <InputForm
          placeholder="Email"
          register={register("email", { required: true })}
          names={"email"}
          type="text"
        />
        {errors.email && errors.email.type === "required" && (
          <Fallback>⚠️ Email Tidak Boleh Kosong!</Fallback>
        )}
        <InputForm
          placeholder="Password"
          register={register("password", { required: true })}
          names={"password"}
          type="password"
          onChange={passwordHandler}
        />
        {errors.password && errors.password.type === "required" && (
          <Fallback>⚠️ Password Tidak Boleh Kosong!</Fallback>
        )}
        <InputForm
          placeholder="Confirm Password"
          register={register("confirmpassword", { required: true })}
          names={"confirmpassword"}
          type="password"
          onChange={conPasswordHandler}
        />
        {isNotValid === true ? <Fallback>⚠️ Password Tidak sama</Fallback> : ""}
        <SecondaryButton type="submit">Sign Up</SecondaryButton>
      </form>
    </div>
  );
};

export default SignUp;
