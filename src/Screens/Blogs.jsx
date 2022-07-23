import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { parseDate } from "../utils/parseDate";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import DeleteButton from "../Components/DeleteButton";
import EditButton from "../Components/EditButton";

export default function Blogs({ setIsEdit, setIsAdd, setEditId }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const { data } = useSWR(
    "https://dsmeglobal-api.herokuapp.com/api/v1/get_blog",
    fetcher,
    {
      suspense: true,
    }
  );

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Title" },
    { heading: "Date" },
    { heading: "Author" },
    { heading: "Category" },
    { heading: "Image" },
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Our Blogs</div>
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
            {data?.length > 0 ? (
              data?.map((item, i) => (
                <div className="entry__info__row" key={i}>
                  <div className="entry__info__row__btns">
                    <EditButton
                      onClick={() => {
                        setIsEdit(true);
                        setEditId({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          categories: item.categories,
                          author: item.author,
                          content: item.content,
                        });
                      }}
                      title="Edit Blog"
                    />
                    <DeleteButton
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteConfirmationId(item._id);
                      }}
                      title="Delete Blog"
                    />
                  </div>
                  <div className="entry__info__row__text">{item.title}</div>
                  <div className="entry__info__row__text">
                    {parseDate(item.updatedAt)}
                  </div>
                  <div className="entry__info__row__text">{item.author}</div>
                  {item.categories.length < 40 ? (
                    <div className="entry__info__row__text">
                      {item.categories.map((category) => category.label + ", ")}
                    </div>
                  ) : (
                    <div className="entry__info__row__text">
                      <a>
                        Categories
                        <div className="entry__info__row__text__message">
                          {item.categories.map((category, i) =>
                            i < item.categories.length
                              ? category.label + ", "
                              : category.label
                          )}
                        </div>
                      </a>
                    </div>
                  )}
                  <div className="entry__info__row__text">
                    <img
                      loading="lazy"
                      src={
                        "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                        item.image
                      }
                      alt="tableEntryPic"
                      className="entry__info__row__text__img"
                    />
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
          deleteConfirmationURL="delete_blog"
          deleteConfirmationId={deleteConfirmationId}
          fetch="https://dsmeglobal-api.herokuapp.com/api/v1/get_blog"
        />
      ) : null}
    </>
  );
}
