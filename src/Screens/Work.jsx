import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function Work({
  deleteConfirmation,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  setDeleteConfirmationURL,
  setEditId,
  isAdd,
  isEdit,
  setIsEdit,
  setIsAdd,
}) {
  const [WorkData, setWorkData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/v1/get_work").then((res) => {
      setWorkData(res.data);
    });
  }, [isAdd === false, isEdit === false, deleteConfirmation]);

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Logo" },
    { heading: "Image" },
    { heading: "Company" },
    { heading: "Title" },
    { heading: "Description" },
  ];

  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Our Work</div>
        <div className="main__container__header__buttons">
          <button
            onClick={() => {
              setIsAdd(true);
            }}
            className="primary__button"
          >
            Add
          </button>
        </div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          {WorkData.length > 0 ? (
            WorkData.map((item, i) => (
              <div className="entry__info__row" key={i}>
                <div className="entry__info__row__btns">
                  <button
                    onClick={() => {
                      setIsEdit(true);
                      setEditId({
                        _id: item._id,
                        company: item.company,
                        title: item.title,
                        description: item.description,
                        logo: item.logo,
                        image: item.image,
                      });
                    }}
                    className="primary__button__rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-edit-2"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      setDeleteConfirmation(true);
                      setDeleteConfirmationId(item._id);
                      setDeleteConfirmationURL("/delete_work");
                    }}
                    className="secondary__button__rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>
                <div className="entry__info__row__text">
                  <img
                    src={"http://localhost:9000/" + item.logo}
                    alt="tableEntryPic"
                    className="entry__info__row__text__img"
                  />
                </div>
                <div className="entry__info__row__text">
                  <img
                    src={"http://localhost:9000/" + item.image}
                    alt="tableEntryPic"
                    className="entry__info__row__text__img"
                  />
                </div>
                <div className="entry__info__row__text">{item.company}</div>
                <div className="entry__info__row__text">{item.title}</div>
                {item.description.length < 40 ? (
                  <div className="entry__info__row__text">
                    {item.description}
                  </div>
                ) : (
                  <div className="entry__info__row__text">
                    <a>
                      View Message
                      <div className="entry__info__row__text__message">
                        {item.description}
                      </div>
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}
