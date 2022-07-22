import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import catagoryDataOption from "../constants/constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function EditVacancies({ closeOnClick, editId }) {
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  useEffect(() => {
    setPosition(editId.position);
    setDescription(editId.description);
    setRequirements(editId.requirements);
    setDepartment(editId.department);
  }, [editId]);
  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.put(
            `https://dsmeglobal-api.herokuapp.com/api/v1/update_careers`,
            {
              _id: editId._id,
              position: position,
              description: description,
              requirements: requirements,
              department: department,
            }
          );
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Edit Vacancy</div>
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
        <div className="popup__container__form__heading">Author</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="Author"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </div>
        <div
          className="popup__container__form__heading"
          style={{ marginTop: 10 }}
        >
          Requirements
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={requirements}
          onChange={(event, editor) => {
            const data = editor.getData();
            setRequirements(data);
          }}
        />
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
