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
    { heading: "Logo" },
    { heading: "Name" },
    { heading: "" },
    { heading: "" },
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

                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={() => {
                      setIsEditClient(true);
                      setEditClientId({
                        _id: item._id,
                        name: item.name,
                        logo: item.logo,
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
                      setDeleteConfirmationURL("/delete_client");
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
