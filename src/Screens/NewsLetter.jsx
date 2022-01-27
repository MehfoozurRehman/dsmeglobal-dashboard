import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function NewsLetter({
  setDeleteConfirmation,
  setDeleteConfirmationId,
  setDeleteConfirmationURL,
}) {
  const [NewsLetterData, setNewsLetterData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/v1/get_news_letter").then((res) => {
      setNewsLetterData(res.data);
    });
  }, []);

  const tableHeadingRow = [{ heading: "Email" }, { heading: "" }];

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
            NewsLetterData.map((item) => (
              <div class="entry__info__row">
                <div
                  class="entry__info__row__text"
                  style={{ marginRight: "4em" }}
                >
                  {item.email}
                </div>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={() => {
                      setDeleteConfirmation(true);
                      setDeleteConfirmationId(item._id);
                      setDeleteConfirmationURL("/delete_news_letter");
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
