import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import DeleteButton from "../Components/DeleteButton";
import EditButton from "../Components/EditButton";

export default function Services({ setIsEdit, setIsAdd, setEditId }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const { data } = useSWR(
    "https://dsmeglobal-api.herokuapp.com/api/v1/get_service",
    fetcher,
    {
      suspense: true,
    }
  );

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Logo" },
    { heading: "Image" },
    { heading: "Title" },
    { heading: "Category" },
    { heading: "Short Description" },
    { heading: "Description" },
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Our Services</div>
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
                          logo: item.logo,
                          title: item.title,
                          image: item.image,
                          description: item.description,
                          shortDescription: item.shortDescription,
                          categories: item.categories,
                        });
                      }}
                      title="Edit Service"
                    />
                    <DeleteButton
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteConfirmationId(item._id);
                      }}
                      title="Delete Service"
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
                  <div className="entry__info__row__text">{item.title}</div>
                  {item.categories.length < 40 ? (
                    <div className="entry__info__row__text">
                      {item.categories.map((category) => category.label + ", ")}
                    </div>
                  ) : (
                    <div className="entry__info__row__text">
                      <a>
                        Categories
                        <div className="entry__info__row__text__message">
                          {item.categories.map(
                            (category) => category.label + ", "
                          )}
                        </div>
                      </a>
                    </div>
                  )}
                  <div className="entry__info__row__text">
                    {item.shortDescription}
                  </div>
                  {item.description.length < 40 ? (
                    <div className="entry__info__row__text">
                      {item.description}
                    </div>
                  ) : (
                    <div className="entry__info__row__text">
                      <a>
                        View Description
                        <div className="entry__info__row__text__message">
                          {item.description}
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
          deleteConfirmationURL="delete_service"
          deleteConfirmationId={deleteConfirmationId}
          fetch="https://dsmeglobal-api.herokuapp.com/api/v1/get_service"
        />
      ) : null}
    </>
  );
}
