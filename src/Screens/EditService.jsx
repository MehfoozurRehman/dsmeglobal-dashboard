import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import catagoryDataOption from "../constants/constant";
import imageToBase64 from "image-to-base64/browser";
import imageCompression from "browser-image-compression";

export default function EditService({ closeOnClick, editId }) {
  const [categories, setCategories] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    setCategories(editId.categories);
    setDescription(editId.description);
    setName(editId.title);
    setLogo(editId.logo);
    setImage(editId.image);
    console.log(editId);
  }, [editId]);
  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.put("http://localhost:9000/api/v1/update_service", {
            _id: editId._id,
            logo: logo,
            image: image,
            categories: categories,
            title: name,
            description: description,
          });
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Edit Service</div>
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
          />
        </div>
        <div className="popup__container__form__heading">Categories</div>
        <div className="login__container__content__form__input">
          <Select
            options={catagoryDataOption}
            placeholder="Categories"
            isMulti
            value={categories}
            onChange={(e) => {
              setCategories(e);
            }}
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
          />
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <div className="popup__container__form__heading">Upload Logo</div>
            <div
              className="panel__container__form__input"
              style={{ alignItems: "flex-start" }}
            >
              <div className="panel__container__form__input__pic">
                <input
                  type="file"
                  className="panel__container__form__input__file"
                  onChange={async (e) => {
                    const options = {
                      maxSizeMB: 0.02,
                      maxWidthOrHeight: 1920,
                      useWebWorker: true,
                    };
                    try {
                      const compressedFile = await imageCompression(
                        e.target.files[0],
                        options
                      );
                      imageToBase64(URL.createObjectURL(compressedFile))
                        .then((response) => {
                          setLogo("data:image/png;base64," + response);
                          console.log(response);
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                />
                <div className="panel__container__form__input__pic__content">
                  {logo != "" ? (
                    <img
                      src={logo}
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
          </div>
          <div>
            <div className="popup__container__form__heading">Upload Image</div>
            <div
              className="panel__container__form__input"
              style={{ alignItems: "flex-start" }}
            >
              <div className="panel__container__form__input__pic">
                <input
                  type="file"
                  className="panel__container__form__input__file"
                  onChange={async (e) => {
                    const options = {
                      maxSizeMB: 0.02,
                      maxWidthOrHeight: 1920,
                      useWebWorker: true,
                    };
                    try {
                      const compressedFile = await imageCompression(
                        e.target.files[0],
                        options
                      );
                      imageToBase64(URL.createObjectURL(compressedFile))
                        .then((response) => {
                          setImage("data:image/png;base64," + response);
                          console.log(response);
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                />
                <div className="panel__container__form__input__pic__content">
                  {image != "" ? (
                    <img
                      src={image}
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
          </div>
        </div>
        <button
          type="submit"
          style={{ marginTop: "1em", marginBottom: "1em" }}
          className="primary__button"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
