import React, { useState } from "react";
import UploadedPic from "../Assets/UploadedPic.png";

export default function InputBox({
  type,
  placeholder,
  variant,
  title,
  disabled,
  value,
  style,
  label,
  name,
  options,
  onChange,
}) {
  const [uploadedImg, setUploadedImg] = useState(false);
  if (variant === "textbox") {
    return (
      <div className="table__details__container__text__box">
        {title}
        <textarea
          cols="30"
          rows="6"
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          style={style}
          className="table__details__container__text__box__input"
        />
      </div>
    );
  } else if (variant === "upload") {
    return (
      <div
        className="panel__container__form__input"
        style={{ alignItems: "flex-start" }}
      >
        <div className="panel__container__form__input__pic">
          <input
            type="file"
            className="panel__container__form__input__file"
            onChange={onChange}
          />
          <div className="panel__container__form__input__pic__content">
            {uploadedImg ? (
              <img
                src={value}
                alt="UploadedPic"
                className="panel__container__form__input__pic__content__img"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.561"
                height="24.561"
                viewBox="0 0 16.561 16.561"
              >
                <g
                  id="Icon_feather-plus"
                  data-name="Icon feather-plus"
                  transform="translate(1.5 1.5)"
                >
                  <path
                    id="Path_9205"
                    data-name="Path 9205"
                    d="M18,22.561a1.5,1.5,0,0,1-1.5-1.5V7.5a1.5,1.5,0,0,1,3,0V21.061A1.5,1.5,0,0,1,18,22.561Z"
                    transform="translate(-11.219 -7.5)"
                    fill="#7c7a79"
                  />
                  <path
                    id="Path_9206"
                    data-name="Path 9206"
                    d="M21.061,19.5H7.5a1.5,1.5,0,0,1,0-3H21.061a1.5,1.5,0,0,1,0,3Z"
                    transform="translate(-7.5 -11.219)"
                    fill="#7c7a79"
                  />
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
    );
  } else if (variant === "select") {
    return (
      <div className="login__container__content__form__input">
        <input
          type={type}
          placeholder={placeholder}
          list="browsers"
          name="browser"
          id="browser"
          required
        />
        <datalist id="browsers">
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </datalist>
      </div>
    );
  } else
    return (
      <div className="login__container__content__form__input">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </div>
    );
}
