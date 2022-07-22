import axios from "axios";
import React, { useEffect, useState } from "react";
import { Widget } from "react-cloudinary-upload-widget";
import Select from "react-select";
import catagoryDataOption from "../constants/constant";
import techDataOption from "../constants/techDataOption";

export default function EditProject({ closeOnClick, editId }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [isOur, setIsOur] = useState("");
  const [categories, setCategories] = useState("");
  const [techonologies, setTechonologies] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [image, setImage] = useState("");
  const [oldBanner, setOldBanner] = useState("");
  const [banner, setBanner] = useState("");
  const [description, setDescription] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteAuthorDesignation, setQuoteAuthorDesignation] = useState("");
  const [quote, setQuote] = useState("");
  const [theme, setTheme] = useState("");
  const [sliderImage, setSliderImage] = useState([]);
  const [oldSliderImage, setOldSliderImage] = useState([]);
  useEffect(() => {
    setName(editId.title);
    setOldBanner(editId.banner);
    setOldImage(editId.image);
    setCategories(editId.categories);
    setTechonologies(editId.techonologies);
    setIsOur({ value: editId.isOur, label: editId.isOur ? "Yes" : "No" });
    setUrl(editId.url);
    setOldSliderImage(editId.sliderImage);
    setDescription(editId.description);
    setQuote(editId.quotation);
    setQuoteAuthor(editId.quotationAuthor);
    setQuoteAuthorDesignation(editId.quotationDesignation);
    setTheme(editId.theme);
  }, [editId]);
  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.put(
            `https://dsmeglobal-api.herokuapp.com/api/v1/update_project`,
            {
              _id: editId._id,
              title: name,
              image: image === "" ? oldImage : image,
              banner: banner === "" ? oldBanner : banner,
              sliderImage:
                sliderImage.length === 0 ? oldSliderImage : sliderImage,
              theme: theme,
              categories: categories,
              techonologies: techonologies,
              isOur: isOur,
              url: url,
              description: description,
              quotation: quote,
              quotationAuthor: quoteAuthor,
              quotationDesignation: quoteAuthorDesignation,
            }
          );
        }}
        className="popup__container__form"
        style={{ maxWidth: "1000px", minWidth: "1000px" }}
      >
        <div className="popup__container__form__header">
          <div>Edit Project</div>
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
        <div style={{ flex: 1, display: "flex" }}>
          <div style={{ flex: 1, marginRight: "1.5em" }}>
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
                required
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
                required
                value={categories}
                onChange={(e) => {
                  setCategories(e);
                }}
              />
            </div>
            <div className="popup__container__form__heading">Techonologies</div>
            <div className="login__container__content__form__input">
              <Select
                options={techDataOption}
                placeholder="Techonologies"
                isMulti
                required
                value={techonologies}
                onChange={(e) => {
                  setTechonologies(e);
                }}
              />
            </div>
            <div style={{ display: "flex", marginTop: ".7em" }}>
              <div style={{ marginRight: "1em" }}>
                <div className="popup__container__form__heading">
                  Upload Image
                </div>
                <Widget
                  sources={["local"]}
                  resourceType={"image"}
                  cloudName={"mehfoozurrehman"}
                  uploadPreset={"cqido5en"}
                  buttonText={
                    <img
                      src={
                        image === ""
                          ? "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                            oldImage
                          : "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                            image
                      }
                      style={{ width: "100%", height: "100%" }}
                    />
                  }
                  style={{
                    color: "black",

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
              <div style={{ marginRight: "1em" }}>
                <div className="popup__container__form__heading">
                  Upload Banner
                </div>
                <Widget
                  sources={["local"]}
                  resourceType={"image"}
                  cloudName={"mehfoozurrehman"}
                  uploadPreset={"cqido5en"}
                  buttonText={
                    <img
                      src={
                        banner === ""
                          ? "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                            oldBanner
                          : "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                            banner
                      }
                      style={{ width: "100%", height: "100%" }}
                    />
                  }
                  style={{
                    color: "black",

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
                    setBanner(e.info.path);
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
                <div className="popup__container__form__heading">
                  Slider Images
                </div>
                <Widget
                  sources={["local"]}
                  resourceType={"image"}
                  cloudName={"mehfoozurrehman"}
                  uploadPreset={"cqido5en"}
                  buttonText={
                    sliderImage.length > 0 ? (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {sliderImage
                          .filter((item, i) => i < 2)
                          .map((item, index) => (
                            <img
                              src={
                                "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                                item
                              }
                              style={{ width: "100%", height: "50%" }}
                            />
                          ))}
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {oldSliderImage
                          .filter((item, i) => i < 2)
                          .map((item, index) => (
                            <img
                              src={
                                "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                                item
                              }
                              style={{ width: "100%", height: "50%" }}
                            />
                          ))}
                      </div>
                    )
                  }
                  style={{
                    color: "black",

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
                  cropping={false}
                  multiple={true}
                  autoClose={false}
                  onSuccess={(e) => {
                    setTimeout(() => {
                      setSliderImage((sliderImage) => [
                        ...sliderImage,
                        e.info.path,
                      ]);
                    }, 300);
                    console.log("array", sliderImage);
                  }}
                  onFailure={(e) => {
                    console.log(e);
                  }}
                  logging={true}
                  use_filename={true}
                  destroy={false}
                  apiKey={915662453295273}
                />
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
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
            <div
              className="popup__container__form__heading"
              style={{ marginTop: 12, marginBottom: 0 }}
            >
              Theme
            </div>
            <input
              type="color"
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
              style={{
                height: 42,
                width: "50%",
                borderRadius: 5,
                backgroundColor: "#e7e9ec",
              }}
            />

            <div className="popup__container__form__heading">Quote Author</div>
            <div className="login__container__content__form__input">
              <input
                type="text"
                placeholder="Quote Author"
                value={quoteAuthor}
                onChange={(e) => {
                  setQuoteAuthor(e.target.value);
                }}
              />
            </div>
            <div className="popup__container__form__heading">
              Quote Author Designation
            </div>
            <div className="login__container__content__form__input">
              <input
                type="text"
                placeholder="Author Designation"
                value={quoteAuthorDesignation}
                onChange={(e) => {
                  setQuoteAuthorDesignation(e.target.value);
                }}
              />
            </div>
            <div className="popup__container__form__heading">Quote</div>
            <div className="table__details__container__text__box">
              <textarea
                cols="30"
                rows="6"
                name="quote"
                placeholder="Quote"
                onChange={(e) => {
                  setQuote(e.target.value);
                }}
                value={quote}
                className="table__details__container__text__box__input"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: "50%",
            margin: "auto",
            marginTop: "2em",
            marginBottom: "1em",
          }}
          className="secondary__button"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
