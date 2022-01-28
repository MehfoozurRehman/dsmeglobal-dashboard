import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function Work({
  deleteConfirmation,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  setDeleteConfirmationURL,
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
  }, [isAdd, isEdit, deleteConfirmation]);

  const tableHeadingRow = [
    { heading: "Logo" },
    { heading: "Image" },
    { heading: "Company" },
    { heading: "Title" },
    { heading: "Description" },
    { heading: "" },
    { heading: "" },
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
            WorkData.map((item) => (
              <div class="entry__info__row">
                <div className="entry__info__row__text">
                  <img
                    src={item.logo}
                    alt="tableEntryPic"
                    className="entry__info__row__text__img"
                  />
                </div>
                <div className="entry__info__row__text">
                  <img
                    src={item.image}
                    alt="tableEntryPic"
                    className="entry__info__row__text__img"
                  />
                </div>
                <div class="entry__info__row__text">{item.company}</div>
                <div class="entry__info__row__text">{item.title}</div>
                {item.description.length < 40 ? (
                  <div class="entry__info__row__text">{item.description}</div>
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
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={() => {
                      setIsEdit(true);
                    }}
                    className="secondary__button"
                  >
                    Edit
                  </button>
                </div>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={() => {
                      setDeleteConfirmation(true);
                      setDeleteConfirmationId(item._id);
                      setDeleteConfirmationURL("/delete_work");
                    }}
                    className="primary__button"
                  >
                    Delete
                  </button>
                </div>
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
