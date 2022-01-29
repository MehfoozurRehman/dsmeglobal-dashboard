import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function Projects({
  deleteConfirmation,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  setDeleteConfirmationURL,
  isAdd,
  isEdit,
  setIsEdit,
  setIsAdd,
  setEditId,
}) {
  const [ProjectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/v1/get_project").then((res) => {
      setProjectsData(res.data);
    });
  }, [isAdd === false, isEdit === false, deleteConfirmation]);

  const tableHeadingRow = [
    { heading: "Title" },
    { heading: "Image" },
    { heading: "Category" },
    { heading: "Is Our" },
    { heading: "URL" },
    { heading: "" },
    { heading: "" },
  ];

  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Our Projects</div>
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
          {ProjectsData.length > 0 ? (
            ProjectsData.map((item, i) => (
              <div className="entry__info__row" key={i}>
                <div className="entry__info__row__text">{item.title}</div>
                <div className="entry__info__row__text">
                  <img
                    src={item.image}
                    alt="tableEntryPic"
                    className="entry__info__row__text__img"
                  />
                </div>
                {item.categories.length < 40 ? (
                  <div className="entry__info__row__text">
                    {item.categories.map((category) => (
                      <>{category.label + ", "}</>
                    ))}
                  </div>
                ) : (
                  <div className="entry__info__row__text">
                    <a>
                      Categories
                      <div className="entry__info__row__text__message">
                        {item.categories.map((category) => (
                          <>{category.label + ", "}</>
                        ))}
                      </div>
                    </a>
                  </div>
                )}
                <div className="entry__info__row__text">
                  {item.isOur.map((item) => item.label)}
                </div>
                <div className="entry__info__row__text">{item.url}</div>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={() => {
                      setIsEdit(true);
                      setEditId({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        categories: item.categories,
                        isOur: item.isOur,
                        url: item.url,
                      });
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
                      setDeleteConfirmationURL("/delete_project");
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
