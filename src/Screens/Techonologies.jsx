import React, { useState } from "react";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import DeleteButton from "../Components/DeleteButton";
import EditButton from "../Components/EditButton";

export default function Techonologies({ setIsEdit, setIsAdd, setEditId }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const { data } = useSWR(
    "https://dsmeglobal-api.herokuapp.com/api/v1/get_techonologies",
    fetcher,
    {
      suspense: true,
    }
  );

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Name" },
    { heading: "Icon" },
    { heading: "Description" },
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">
            Our Technologies
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
                          icon: item.icon,
                          image: item.image,
                          content: item.content,
                        });
                      }}
                      title="Edit Techonology"
                    />
                    <DeleteButton
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteConfirmationId(item._id);
                      }}
                      title="Delete Techonology"
                    />
                  </div>
                  <div className="entry__info__row__text">{item.name}</div>
                  <div className="entry__info__row__text">
                    <img
                      loading="lazy"
                      src={
                        "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                        item.icon
                      }
                      alt="tableEntryPic"
                      className="entry__info__row__text__img"
                    />
                  </div>
                  <div className="entry__info__row__text">{item.content}</div>
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
          deleteConfirmationURL="delete_techonologies"
          deleteConfirmationId={deleteConfirmationId}
          fetch="https://dsmeglobal-api.herokuapp.com/api/v1/get_techonologies"
        />
      ) : null}
    </>
  );
}
