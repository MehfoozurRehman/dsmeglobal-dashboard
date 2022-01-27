import React from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";

export default function EditStartup({ closeOnClick }) {
  return (
    <div className="popup__container">
      <form action="" className="popup__container__form" style={{ width: 750 }}>
        <div className="popup__container__form__header">
          <div className="popup__container__form__header__heading">
            Edit Startup
          </div>
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
        <div className="invester__popup__entry">
          <div className="invester__popup__entry__content">
            <div className="popup__container__form__heading">Name</div>
            <InputBox placeholder="Name" type="text" />
          </div>
          <div className="invester__popup__entry__content">
            <div className="popup__container__form__heading">Website</div>
            <InputBox placeholder="Website" type="text" />
          </div>
        </div>
        <div className="invester__popup__entry">
          <div className="invester__popup__entry__content">
            <div className="popup__container__form__heading">Industry</div>
            <InputBox
              placeholder="Industry"
              type="text"
              variant="select"
              options={[
                { label: "Industry 1", value: "Industry 1" },
                { label: "Industry 2", value: "Industry 2" },
                { label: "Industry 3", value: "Industry 3" },
              ]}
            />
          </div>
          <div className="invester__popup__entry__content">
            <div className="popup__container__form__heading">Startup Stage</div>
            <InputBox placeholder="Startup Stage" type="text" />
          </div>
        </div>
        <div className="invester__popup__entry">
          <div className="invester__popup__entry__content">
            <div className="popup__container__form__heading">Startup Model</div>
            <InputBox placeholder="Startup Model" type="text" />
          </div>
          <div className="invester__popup__entry__content"></div>
        </div>

        <div className="popup__container__form__heading">Upload Image</div>
        <InputBox variant="upload" />

        {/* <div className="popup__container__form__heading">Answer</div>
        <textarea
          cols="30"
          rows="6"
          placeholder="Branch"
          className="table__details__container__text__box__input"
        /> */}
        <div className="popup__cta__button">
          <button
            onClick={() => {
              closeOnClick(false);
            }}
            style={{
              marginTop: "2em",
              marginBottom: "1em",
            }}
            className="primary__button"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
