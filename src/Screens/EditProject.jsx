import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import catagoryDataOption from "../constants/constant";
import imageToBase64 from "image-to-base64/browser";
import imageCompression from "browser-image-compression";

export default function EditProject({ closeOnClick, editId }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [categories, setCategories] = useState("");
  const [isOur, setIsOur] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    setName(editId.title);
    setOldImage(editId.image);
    setCategories(editId.categories);
    setIsOur({ value: editId.isOur, label: editId.isOur ? "Yes" : "No" });
    setUrl(editId.url);
  }, [editId]);
  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.put("http://localhost:9000/api/v1/update_project", {
            _id: editId._id,
            title: name,
            image: image.name,
            categories: categories,
            isOur: isOur,
            url: url,
          });
          const formData = new FormData();
          formData.append("image", image);
          axios.post("http://localhost:9000/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Edit Project</div>
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
        <div className="popup__container__form__heading">URL</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
        <div className="popup__container__form__heading">Is Our</div>
        <div className="login__container__content__form__input">
          <Select
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            placeholder="Is Our"
            value={isOur}
            onChange={(e) => {
              setIsOur(e);
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
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <div className="panel__container__form__input__pic__content">
                {oldImage != "" ? (
                  <img
                    src={
                      image === ""
                        ? `http://localhost:9000/${oldImage}`
                        : URL.createObjectURL(image)
                    }
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
        <button
          type="submit"
          style={{ marginTop: "1em", marginBottom: "1em" }}
          className="secondary__button"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
