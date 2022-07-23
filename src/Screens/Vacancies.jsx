import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { parseDate } from "../utils/parseDate";
import { getText } from "../utils/getText";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import DeleteButton from "../Components/DeleteButton";
import EditButton from "../Components/EditButton";

export default function Vacancies({ setIsEdit, setIsAdd, setEditId }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const { data } = useSWR(
    "https://dsmeglobal-api.herokuapp.com/api/v1/get_careers",
    fetcher,
    {
      suspense: true,
    }
  );

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
            {data.length > 0 ? (
              data.map((item, i) => (
                <div className="entry__info__row" key={i}>
                  <div className="entry__info__row__btns">
                    <EditButton
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
                      title="Edit Vacancy"
                    />
                    <DeleteButton
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteConfirmationId(item._id);
                      }}
                      title="Delete Vacancy"
                    />
                  </div>
                  <div className="entry__info__row__text">{item.position}</div>
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
          </div>
        </div>
      </div>
      {deleteConfirmation ? (
        <DeleteConfirmation
          closeOnClick={setDeleteConfirmation}
          deleteConfirmationURL="delete_careers"
          deleteConfirmationId={deleteConfirmationId}
          fetch="https://dsmeglobal-api.herokuapp.com/api/v1/get_careers"
        />
      ) : null}
    </>
  );
}
