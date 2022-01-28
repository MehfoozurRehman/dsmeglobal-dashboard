import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function Category({
  deleteConfirmation,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  setDeleteConfirmationURL,
  isAddCategory,
  setIsAddCategory,
}) {
  const [CategoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/v1/get_category").then((res) => {
      setCategoryData(res.data);
    });
  }, [isAddCategory, deleteConfirmation]);

  const tableHeadingRow = [{ heading: "Email" }, { heading: "" }];

  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Category</div>
        <div className="main__container__header__buttons">
          <button
            onClick={() => {
              setIsAddCategory(true);
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
          {CategoryData.length > 0 ? (
            CategoryData.map((item) => (
              <div class="entry__info__row">
                <div
                  class="entry__info__row__text"
                  style={{ marginRight: "4em" }}
                >
                  {item.name}
                </div>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={() => {
                      setDeleteConfirmation(true);
                      setDeleteConfirmationId(item._id);
                      setDeleteConfirmationURL("/delete_category");
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
