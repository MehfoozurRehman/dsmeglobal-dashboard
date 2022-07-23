import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import DeleteButton from "../Components/DeleteButton";
import EditButton from "../Components/EditButton";

export default function Client({
  setIsAddClient,
  setIsEditClient,
  setEditClientId,
}) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const { data } = useSWR(
    "https://dsmeglobal-api.herokuapp.com/api/v1/get_client",
    fetcher,
    {
      suspense: true,
    }
  );

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Logo" },
    { heading: "Name" },
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Our Clients</div>
          <div className="main__container__header__buttons">
            <button
              onClick={() => {
                setIsAddClient(true);
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
                        setIsEditClient(true);
                        setEditClientId({
                          _id: item._id,
                          name: item.name,
                          logo: item.logo,
                        });
                      }}
                      title="Edit Client"
                    />
                    <DeleteButton
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteConfirmationId(item._id);
                      }}
                      title="Delete Client"
                    />
                  </div>
                  <div className="entry__info__row__text">
                    <img
                      loading="lazy"
                      src={
                        "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                        item.logo
                      }
                      alt="tableEntryPic"
                      className="entry__info__row__text__img"
                    />
                  </div>
                  <div
                    className="entry__info__row__text"
                    style={{ marginRight: "4em" }}
                  >
                    {item.name}
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
          deleteConfirmationURL="delete_client"
          deleteConfirmationId={deleteConfirmationId}
          fetch="https://dsmeglobal-api.herokuapp.com/api/v1/get_client"
        />
      ) : null}
    </>
  );
}
