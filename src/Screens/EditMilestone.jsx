import React from "react";
import InputBox from "../Components/InputBox";

export default function EditMilestone({ closeOnClick }) {
  return (
    <div className="popup__container">
      <form action="" className="popup__container__form">
        <div className="popup__container__form__header">
          <div>Edit Milestone</div>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  id="Line_21"
                  data-name="Line 21"
                  x2="12"
                  y2="12"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="popup__container__form__heading">Title</div>
        <InputBox placeholder="Title" type="text" />
        <div className="popup__container__form__heading">Value</div>
        <InputBox placeholder="Value" type="text" />
        <button
          onClick={() => {
            closeOnClick(false);
          }}
          style={{ marginTop: "1em", marginBottom: "1em" }}
          className="primary__button"
        >
          Save
        </button>
      </form>
    </div>
  );
}
