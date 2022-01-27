import React from "react";
import Button from "./Button";
import tableEntryPic from "../Assets/tableEntryPic.png";

function EntryInfoRowData({
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

export default function TableEntryRows({ tableEntryInfoRow }) {
  return (
    <div className="entry__info__row">
      {tableEntryInfoRow.map((item, i) => (
        <EntryInfoRowData
          key={i}
          value={item.info}
          variant={
            item.type === "btn_secondary"
              ? "btn_secondary"
              : item.type === "btn_primary"
              ? "btn_primary"
              : item.type === "img"
              ? "img"
              : item.type === "message"
              ? "message"
              : null
          }
          placeholder={item.placeholder}
          path={item.path}
          onClick={item.onClick}
          label={item.label}
        />
      ))}
    </div>
  );
}
