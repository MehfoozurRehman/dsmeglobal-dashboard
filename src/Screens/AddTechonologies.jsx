import axios from "axios";
import React, { useState } from "react";
import { Widget } from "react-cloudinary-upload-widget";

export default function AddTechonologies({ closeOnClick }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.post(
            `https://dsmeglobal-api.herokuapp.com/api/v1/set_techonologies`,
            {
              name: name,
              image: image,
            }
          );
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Add Technologies</div>
          <button
            onClick={() => {
              closeOnClick(false);
            }}
            type="button"
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
                  stroke="currentColor"
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
                  stroke="currentColor"
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
        <div>
          <div className="popup__container__form__heading">Upload Image</div>
          <Widget
            sources={["local"]}
            resourceType={"image"}
            cloudName={"mehfoozurrehman"}
            uploadPreset={"cqido5en"}
            buttonText={
              image !== "" ? (
                <img
                  src={
                    "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                    image
                  }
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                "+"
              )
            }
            style={{
              color: "black",
              border: "none",
              width: "120px",
              backgroundColor: "white",
              border: "1px solid #242424",
              borderRadius: "4px",
              fontSize: 50,
              height: "120px",
              cursor: "pointer",
              padding: 0,
            }}
            folder={"dsme_global"}
            cropping={true}
            multiple={false}
            autoClose={false}
            onSuccess={(e) => {
              setImage(e.info.path);
              console.log(e);
            }}
            onFailure={(e) => {
              console.log(e);
            }}
            logging={true}
            use_filename={true}
            destroy={true}
            apiKey={915662453295273}
          />
        </div>
        <button
          type="submit"
          style={{ marginTop: "1em", marginBottom: "1em" }}
          className="secondary__button"
        >
          Add
        </button>
      </form>
    </div>
  );
}
