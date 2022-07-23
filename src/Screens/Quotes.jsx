import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import DeleteButton from "../Components/DeleteButton";

export default function Quotes({}) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const { data } = useSWR(
    "https://dsmeglobal-api.herokuapp.com/api/v1/get_news_letter",
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
    { heading: "Service" },
    { heading: "Budget" },
    { heading: "Company/Organization" },
    { heading: "Message" },
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Quotes</div>
          <div className="main__container__header__buttons"></div>
        </div>
        <div className="main__container__content">
          <div className="main__container__content__table">
            <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
            {data.length > 0 ? (
              data.map((item, i) => (
                <div className="entry__info__row" key={i}>
                  <div className="entry__info__row__btns">
                    <DeleteButton
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteConfirmationId(item._id);
                      }}
                      title="Delete Quote"
                    />
                  </div>
                  <div className="entry__info__row__text">{item.username}</div>
                  <div className="entry__info__row__text">{item.email}</div>
                  <div className="entry__info__row__text">{item.phone}</div>
                  <div className="entry__info__row__text">{item.service}</div>
                  <div className="entry__info__row__text">{item.budget}</div>
                  <div className="entry__info__row__text">{item.company}</div>
                  {item.message.length < 40 ? (
                    <div className="entry__info__row__text">{item.message}</div>
                  ) : (
                    <div className="entry__info__row__text">
                      <a>
                        View Message
                        <div className="entry__info__row__text__message">
                          {item.message}
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
          </div>
        </div>
      </div>
      {deleteConfirmation ? (
        <DeleteConfirmation
          closeOnClick={setDeleteConfirmation}
          deleteConfirmationURL="delete_quote"
          deleteConfirmationId={deleteConfirmationId}
          fetch="https://dsmeglobal-api.herokuapp.com/api/v1/get_quote"
        />
      ) : null}
    </>
  );
}
