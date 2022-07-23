import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import DeleteButton from "../Components/DeleteButton";
import EditButton from "../Components/EditButton";

export default function CareersApplications({
  setIsEdit,
  setIsAdd,
  setEditId,
}) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const { data } = useSWR(
    "https://dsmeglobal-api.herokuapp.com/api/v1/get_careers_applied",
    fetcher,
    {
      suspense: true,
    }
  );

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Name" },
    { heading: "Email" },
    { heading: "Phone" },
    { heading: "Position" },
    { heading: "Department" },
    { heading: "CV" },
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">
            Careers Applications
          </div>
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
                          name: item.name,
                          email: item.email,
                          phone: item.phone,
                          position: item.position,
                          department: item.department,
                          cv: item.cv,
                        });
                      }}
                      title="Edit Application"
                    />
                    <DeleteButton
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteConfirmationId(item._id);
                      }}
                      title="Delete Application"
                    />
                  </div>
                  <div className="entry__info__row__text">{item.name}</div>
                  <div className="entry__info__row__text">{item.email}</div>
                  <div className="entry__info__row__text">{item.phone}</div>
                  <div className="entry__info__row__text">{item.position}</div>
                  <div className="entry__info__row__text">
                    {item.department.map((item) => item.label)}
                  </div>
                  <div className="entry__info__row__text">
                    <a
                      href={
                        "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                        item.cv
                      }
                    >
                      View CV
                    </a>
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
          deleteConfirmationURL="delete_careers_applied"
          deleteConfirmationId={deleteConfirmationId}
          fetch="https://dsmeglobal-api.herokuapp.com/api/v1/get_careers_applied"
        />
      ) : null}
    </>
  );
}
