import React, { useState } from "react";
import "../Pages/Styles/Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { RiLogoutBoxLine } from "react-icons/ri";
import ListIcon from "../Components/Asset/listIcon.png";

const Navbar = (props) => {
  const { userData } = props;

  const [navOpen, setNavOpen] = useState(false);

  const navOpenHandler = () => {
    if (navOpen === false) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };

  return (
    <nav className={navOpen === false ? "navbar " : "navbar active"}>
      <div className="main-list">
        <TiThMenu
          className={navOpen === false ? "bar" : "bar active"}
          onClick={navOpenHandler}
        />
        <div className="logo">
          <img
            className={navOpen === false ? "img" : "img active"}
            src={ListIcon}
            alt=""
          />
          {navOpen === true ? <p className="title">Todo List</p> : ""}
        </div>
      </div>
      {navOpen === false ? (
        ""
      ) : (
        <p className="greating-profile active">Welcomes!</p>
      )}

      <ul
        className={navOpen === false ? "list-profile" : "list-profile active"}
      >
        {navOpen === false ? (
          <div className="profile"></div>
        ) : (
          <>
            {/* <div className="profile active">
              <input type="file" className="input-profile" />
            </div> */}
            <p className="names">
              {userData.firstname + " " + userData.lastname || "Your Name"}
            </p>
            <p className="email">{userData.email}</p>
          </>
        )}
      </ul>
      <ul
        className={
          navOpen === false ? "logout-container" : "logout-container active"
        }
        onClick={props.logoutHandler}
      >
        <li className={navOpen === false ? "logout-li" : "logout-li active"}>
          <RiLogoutBoxLine
            className={navOpen === false ? "logout-icon" : "logout-icon active"}
          />
          {navOpen === false ? "" : "Logout"}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
