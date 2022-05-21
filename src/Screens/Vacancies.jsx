import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";
import DeleteConfirmation from "./DeleteConfirmation";
import { parseDate } from "../utils/parseDate";
import { getText } from "../utils/getText";

export default function Vacancies({
  isAdd,
  isEdit,
  setIsEdit,
  setIsAdd,
  setEditId,
}) {
  const [VacanciesData, setVacanciesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  useEffect(() => {
    axios
      .get(`https://dsmeglobal-api.herokuapp.com/api/v1/get_careers`)
      .then((res) => {
        setVacanciesData(res.data);
        setLoading(false);
      });
  }, [!isAdd, !isEdit, !deleteConfirmation]);

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Position" },
    { heading: "Date" },
    { heading: "Description" },
    { heading: "Requirements" },
    { heading: "Department" },
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Vacancies</div>
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
                {VacanciesData.length > 0 ? (
                  VacanciesData.map((item, i) => (
                    <div className="entry__info__row" key={i}>
                      <div className="entry__info__row__btns">
                        <button
                          onClick={() => {
                            setIsEdit(true);
                            setEditId({
                              _id: item._id,
                              position: item.position,
                              department: item.department,
                              description: item.description,
                              requirements: item.requirements,
                            });
                          }}
                          className="primary__button__rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-edit-2"
                          >
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            setDeleteConfirmation(true);
                            setDeleteConfirmationId(item._id);
                          }}
                          className="secondary__button__rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </button>
                      </div>
                      <div className="entry__info__row__text">
                        {item.position}
                      </div>
                      <div className="entry__info__row__text">
                        {parseDate(item.updatedAt)}
                      </div>
                      <div className="entry__info__row__text">
                        {item.description}
                      </div>
                      <div className="entry__info__row__text">
                        {getText(item.requirements).length < 40 ? (
                          <div className="entry__info__row__text">
                            {getText(item.requirements)}
                          </div>
                        ) : (
                          <div className="entry__info__row__text">
                            <a>
                              View Details
                              <div className="entry__info__row__text__message">
                                {getText(item.requirements)}
                              </div>
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="entry__info__row__text">
                        {item.department.map((item) => item.label)}
                      </div>
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
      {deleteConfirmation ? (
        <DeleteConfirmation
          closeOnClick={setDeleteConfirmation}
          deleteConfirmationURL="delete_careers"
          deleteConfirmationId={deleteConfirmationId}
          fetch={() => {
            setLoading(true);
            axios
              .get(`https://dsmeglobal-api.herokuapp.com/api/v1/get_careers`)
              .then((res) => {
                setVacanciesData(res.data);
                setLoading(false);
              });
          }}
        />
      ) : null}
    </>
  );
}
