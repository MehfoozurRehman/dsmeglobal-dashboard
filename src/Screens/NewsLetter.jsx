import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function NewsLetter({
  deleteConfirmation,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  setDeleteConfirmationURL,
}) {
  const [NewsLetterData, setNewsLetterData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/v1/get_news_letter").then((res) => {
      setNewsLetterData(res.data);
    });
  }, [deleteConfirmation]);

  const tableHeadingRow = [{ heading: "" }, { heading: "Email" }];

  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">NewsLetter</div>
        <div className="main__container__header__buttons"></div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          {NewsLetterData.length > 0 ? (
            NewsLetterData.map((item, i) => (
              <div className="entry__info__row" key={i}>
                <div style={{ width: 126 }}>
                  <button
                    onClick={() => {
                      setDeleteConfirmation(true);
                      setDeleteConfirmationId(item._id);
                      setDeleteConfirmationURL("/delete_news_letter");
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
                <div
                  className="entry__info__row__text"
                  style={{ marginRight: "4em" }}
                >
                  {item.email}
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
