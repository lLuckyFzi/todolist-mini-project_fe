import React from "react";
import PageNotFound from "../Components/Asset/NotFound.png";
import "../Pages/Styles/PageNotFound.css";
import SecondaryButton from "./SecondaryButton";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const NotFoundPages = () => {
  return (
    <div className="NotFound-container">
      <div className="NotFound-wrapper">
        <img src={PageNotFound} alt="" />
        <Link to={"/todolist"}>
          <SecondaryButton className="NotFound-btn">
            <AiFillCaretLeft className="left-icon" />
            Go Back
          </SecondaryButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPages;
