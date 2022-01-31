import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function Client({
  deleteConfirmation,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  setDeleteConfirmationURL,
  isAddClient,
  setIsAddClient,
  isEditClient,
  setIsEditClient,
  setEditClientId,
}) {
  const [ClientData, setClientData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/v1/get_client").then((res) => {
      setClientData(res.data);
    });
  }, [isAddClient, isEditClient, deleteConfirmation]);

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Logo" },
    { heading: "Name" },
  ];

  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Client</div>
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
          {ClientData.length > 0 ? (
            ClientData.map((item, i) => (
              <div className="entry__info__row" key={i}>
                <div style={{ width: 126 }}>
                  <button
                    onClick={() => {
                      setIsEditClient(true);
                      setEditClientId({
                        _id: item._id,
                        name: item.name,
                        logo: item.logo,
                      });
                    }}
                    className="primary__button__rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                      setDeleteConfirmationURL("/delete_client");
                    }}
                    className="secondary__button__rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                    src={item.logo}
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
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}
