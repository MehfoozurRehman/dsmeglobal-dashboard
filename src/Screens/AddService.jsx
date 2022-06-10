import axios from "axios";
import React, { useState } from "react";
import { Widget } from "react-cloudinary-upload-widget";
import Select from "react-select";
import catagoryDataOption from "../constants/constant";

export default function AddService({ closeOnClick }) {
  const [categories, setCategories] = useState("");
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [image, setImage] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.post(
            `https://dsmeglobal-api.herokuapp.com/api/v1/set_service`,
            {
              logo: logo,
              image: image,
              categories: categories,
              title: name,
              shortDescription: shortDescription,
              description: description,
            }
          );
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Add Service</div>
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
        <div className="popup__container__form__heading">Categories</div>
        <div className="login__container__content__form__input">
          <Select
            options={catagoryDataOption}
            placeholder="Categories"
            required
            value={categories}
            onChange={(e) => {
              setCategories(e);
            }}
          />
        </div>
        <div className="popup__container__form__heading">Short Description</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="Short Description"
            value={shortDescription}
            onChange={(e) => {
              setShortDescription(e.target.value);
            }}
            required
          />
        </div>
        <div className="popup__container__form__heading">Description</div>
        <div className="table__details__container__text__box">
          <textarea
            cols="30"
            rows="6"
            name="description"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            className="table__details__container__text__box__input"
            required
          />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "1em" }}>
            <div className="popup__container__form__heading">Upload Logo</div>
            <Widget
              sources={["local"]}
              resourceType={"image"}
              cloudName={"mehfoozurrehman"}
              uploadPreset={"cqido5en"}
              buttonText={
                logo !== "" ? (
                  <img
                    src={
                      "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                      logo
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
                setLogo(e.info.path);
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
