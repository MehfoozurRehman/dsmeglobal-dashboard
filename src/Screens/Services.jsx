import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function Services({
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
  const [ServicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/v1/get_service`)
      .then((res) => {
        setServicesData(res.data);
        setLoading(false);
      });
  }, [isAdd === false, isEdit === false, deleteConfirmation]);

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Logo" },
    { heading: "Image" },
    { heading: "Title" },
    { heading: "Category" },
    { heading: "Description" },
  ];

  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Our Services</div>
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
          {loading ? (
            <Loader />
          ) : (
            <>
              {ServicesData.length > 0 ? (
                ServicesData.map((item, i) => (
                  <div className="entry__info__row" key={i}>
                    <div className="entry__info__row__btns">
                      <button
                        onClick={() => {
                          setIsEdit(true);
                          setEditId({
                            _id: item._id,
                            logo: item.logo,
                            title: item.title,
                            image: item.image,
                            description: item.description,
                            categories: item.categories,
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
                          setDeleteConfirmationURL("/delete_service");
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
                        src={process.env.REACT_APP_API_URL + item.logo}
                        alt="tableEntryPic"
                        className="entry__info__row__text__img"
                      />
                    </div>
                    <div className="entry__info__row__text">
                      <img
                        src={process.env.REACT_APP_API_URL + item.image}
                        alt="tableEntryPic"
                        className="entry__info__row__text__img"
                      />
                    </div>
                    <div className="entry__info__row__text">{item.title}</div>
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
                    {item.description.length < 40 ? (
                      <div className="entry__info__row__text">
                        {item.description}
                      </div>
                    ) : (
                      <div className="entry__info__row__text">
                        <a>
                          View Description
                          <div className="entry__info__row__text__message">
                            {item.description}
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No Data yet
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
