import React from "react";
import Button from "./Button";
import tableEntryPic from "../Assets/tableEntryPic.png";

export function EntryInfoRowData({
  value,
  variant,
  placeholder,
  path,
  label,
  onClick,
}) {
  if (variant === "btn_primary") {
    return (
      <div style={{ marginRight: 10 }}>
        <Button
          path={path}
          onClick={onClick}
          placeholder={placeholder}
          className="primary__button"
        />
      </div>
    );
  } else if (variant === "btn_secondary") {
    return (
      <div style={{ marginRight: 10 }}>
        <Button
          path={path}
          onClick={onClick}
          placeholder={placeholder}
          className="secondary__button"
        />
      </div>
    );
  } else if (variant === "message") {
    return (
      <div className="entry__info__row__text">
        <a href="">
          {value}
          <div className="entry__info__row__text__message">{label}</div>
        </a>
      </div>
    );
  } else if (variant === "img") {
    return (
      <div className="entry__info__row__text">
        <img
          loading="lazy"
          src={tableEntryPic}
          alt="tableEntryPic"
          className="entry__info__row__text__img"
        />
      </div>
    );
  } else {
    return <div className="entry__info__row__text">{value}</div>;
  }
}
