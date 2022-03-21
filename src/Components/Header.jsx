import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";

export default function Header() {
  return (
    <div className="header__container">
      <Link
        to="/dashboard"
        className="header__container__logo"
        onClick={() => {
          document.getElementById(
            "sidebar__container__content__entry__input__1"
          ).checked = true;
        }}
      >
        <img src={logo} alt="logo" className="header__container__logo__svg" />
      </Link>
    </div>
  );
}
