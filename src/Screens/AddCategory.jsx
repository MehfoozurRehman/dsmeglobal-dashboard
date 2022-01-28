import axios from "axios";
import React, { useState } from "react";
import imageToBase64 from "image-to-base64";

export default function AddCategory({ closeOnClick }) {
  const [name, setName] = useState("");

  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.post("http://localhost:9000/api/v1/set_category", {
            name: name,
          });
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Add Category</div>
          <button
            onClick={() => {
              closeOnClick(false);
            }}
            className="popup__container__form__close__btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.829"
              height="14.829"
              viewBox="0 0 14.829 14.829"
            >
              <g id="x" transform="translate(-4.586 -4.586)">
                <line
                  id="Line_20"
                  data-name="Line 20"
                  x1="12"
                  y2="12"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="Line_21"
                  data-name="Line 21"
                  x2="12"
                  y2="12"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="popup__container__form__heading">Name</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{ marginTop: "1em", marginBottom: "1em" }}
          className="primary__button"
        >
          Add
        </button>
      </form>
    </div>
  );
}
