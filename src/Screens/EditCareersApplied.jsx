import axios from "axios";
import React, { useEffect, useState } from "react";
import { Widget } from "react-cloudinary-upload-widget";
import Select from "react-select";
import catagoryDataOption from "../constants/constant";

export default function EditCareersApplied({ closeOnClick, editId }) {
  const [name, setName] = useState("");
  const [cv, setCV] = useState("");
  const [oldCV, setOldCV] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState([]);
  console.log({
    _id: editId._id,
    name: name,
    email: email,
    phone: phone,
    position: position,
    department: department,
    cv: cv === "" ? oldCV : cv,
  });
  useEffect(() => {
    setName(editId.name);
    setEmail(editId.email);
    setPhone(editId.phone);
    setPosition(editId.position);
    setDepartment(editId.department);
    setOldCV(editId.cv);
  }, [editId]);
  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.put(
            `https://dsmeglobal-api.herokuapp.com/api/v1/update_careers_applied`,
            {
              _id: editId._id,
              name: name,
              email: email,
              phone: phone,
              position: position,
              department: department,
              cv: cv === "" ? oldCV : cv,
            }
          );
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Edit Application</div>
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
        <div className="popup__container__form__heading">Email</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="Eamil"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="popup__container__form__heading">Phone</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>
        <div className="popup__container__form__heading">Position</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            required
          />
        </div>
        <div className="popup__container__form__heading">Department</div>
        <div className="login__container__content__form__input">
          <Select
            options={catagoryDataOption}
            placeholder="Department"
            required
            value={department}
            onChange={(e) => {
              setDepartment(e);
            }}
          />
        </div>
        <div>
          <div className="popup__container__form__heading">Upload PDF</div>
          <Widget
            sources={["local"]}
            resourceType={"image"}
            cloudName={"mehfoozurrehman"}
            uploadPreset={"cqido5en"}
            buttonText={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingRight: 10,
                }}
              >
                <div
                  style={{
                    background: "red",
                    width: 40,
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    marginRight: 10,
                  }}
                >
                  PDF
                </div>
                {(cv === "" ? oldCV : cv)
                  .replace(/dsme_global/, "")
                  .replace("/", "")
                  .substring((cv === "" ? oldCV : cv).indexOf("/") + 1)
                  .trim()}
              </div>
            }
            style={{
              color: "black",
              border: "none",
              width: "fit-content",
              minWidth: "170px",
              backgroundColor: "white",
              border: "1px solid #242424",
              borderRadius: "4px",
              fontSize: 12,
              height: "40px",
              cursor: "pointer",
              padding: 0,
            }}
            folder={"dsme_global"}
            cropping={true}
            multiple={false}
            autoClose={false}
            onSuccess={(e) => {
              setCV(e.info.path);
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
          Edit
        </button>
      </form>
    </div>
  );
}
