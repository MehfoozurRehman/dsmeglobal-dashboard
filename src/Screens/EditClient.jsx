import axios from "axios";
import { Image } from "cloudinary-react";
import React, { useEffect, useState } from "react";
import { Widget } from "react-cloudinary-upload-widget";

export default function EditClient({ closeOnClick, editId }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [oldImage, setOldImage] = useState("");
  useEffect(() => {
    setName(editId.name);
    setOldImage(editId.logo);
  }, [editId]);
  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.put(
            `https://dsmeglobal-api.herokuapp.com/api/v1/update_client`,
            {
              _id: editId._id,
              name: name,
              logo: image,
            }
          );
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Edit Client</div>
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
        <div>
          <div className="popup__container__form__heading">Upload Image</div>
          <Widget
            sources={["local"]}
            resourceType={"image"} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
            cloudName={"mehfoozurrehman"} // your cloudinary account cloud name.
            uploadPreset={"cqido5en"} // check that an upload preset exists and check mode is signed or unisgned
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
            } // default 'Upload Files'
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
            }} // inline styling only or style id='cloudinary_upload_button'
            folder={"dsme_global"} // set cloudinary folder name to send file
            cropping={true}
            multiple={false}
            autoClose={false}
            onSuccess={(e) => {
              setImage(e.info.path);
              console.log(e);
            }} // add success callback -> returns result
            onFailure={(e) => {
              console.log(e);
            }} // add failure callback -> returns 'response.error' + 'response.result'
            logging={true} // logs will be provided for success and failure messages,
            use_filename={true}
            destroy={true} // will destroy the widget on completion
            apiKey={915662453295273} // cloudinary API key -> number format
            // unique_filename={true}
          />
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
