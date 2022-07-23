import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import DeleteButton from "../Components/DeleteButton";
import EditButton from "../Components/EditButton";

export default function Projects({ setIsEdit, setIsAdd, setEditId }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const { data } = useSWR(
    "https://dsmeglobal-api.herokuapp.com/api/v1/get_project",
    fetcher,
    {
      suspense: true,
    }
  );

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Title" },
    { heading: "Image" },
    { heading: "Banner" },
    { heading: "Slide Image" },
    { heading: "Theme" },
    { heading: "Categories" },
    { heading: "Techonologies" },
    { heading: "Is Our" },
    { heading: "URL" },
    { heading: "Description" },
    { heading: "Quote" },
    { heading: "Quote Author" },
    { heading: "Quote Designation" },
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Our Projects</div>
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
                          title: item.title,
                          image: item.image,
                          banner: item.banner,
                          sliderImage: item.sliderImage,
                          theme: item.theme,
                          categories: item.categories,
                          techonologies: item.techonologies,
                          isOur: item.isOur,
                          url: item.url,
                          description: item.description,
                          quotation: item.quotation,
                          quotationAuthor: item.quotationAuthor,
                          quotationDesignation: item.quotationDesignation,
                        });
                      }}
                      title="Edit Project"
                    />
                    <DeleteButton
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteConfirmationId(item._id);
                      }}
                      title="Delete Project"
                    />
                  </div>
                  <div className="entry__info__row__text">{item.title}</div>
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
                  <div className="entry__info__row__text">
                    <img
                      loading="lazy"
                      src={
                        "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                        item.banner
                      }
                      alt="tableEntryPic"
                      className="entry__info__row__text__img"
                    />
                  </div>
                  <div
                    className="entry__info__row__text"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {item.sliderImage
                      .filter((item, i) => i < 2)
                      .map((item, i) => (
                        <img
                          key={i}
                          loading="lazy"
                          src={
                            "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                            item
                          }
                          alt="tableEntryPic"
                          className="entry__info__row__text__img"
                          style={{
                            marginRight: ".3em",
                            marginLeft: ".3em",
                          }}
                        />
                      ))}
                  </div>
                  <div
                    className="entry__info__row__text"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div
                      style={{
                        backgroundColor: item.theme,
                        width: 30,
                        height: 30,
                        borderRadius: 5,
                      }}
                    ></div>
                  </div>
                  {item.categories.length < 40 ? (
                    <div className="entry__info__row__text">
                      {item.categories.length <= 2 ? (
                        <div className="entry__info__row__text">
                          {item.categories.map((category, i) =>
                            i + 1 < item.categories.length
                              ? category.label + ", "
                              : category.label
                          )}
                        </div>
                      ) : (
                        <div className="entry__info__row__text">
                          <a>
                            View Categories
                            <div className="entry__info__row__text__message">
                              {item.categories.map((category, i) =>
                                i + 1 < item.categories.length
                                  ? category.label + ", "
                                  : category.label
                              )}
                            </div>
                          </a>
                        </div>
                      )}
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
                  {item.techonologies.length < 40 ? (
                    <div className="entry__info__row__text">
                      {item.techonologies.length <= 2 ? (
                        <div className="entry__info__row__text">
                          {item.techonologies.map((category, i) =>
                            i + 1 < item.techonologies.length
                              ? category.label + ", "
                              : category.label
                          )}
                        </div>
                      ) : (
                        <div className="entry__info__row__text">
                          <a>
                            View Techonologies
                            <div className="entry__info__row__text__message">
                              {item.techonologies.map((category, i) =>
                                i + 1 < item.techonologies.length
                                  ? category.label + ", "
                                  : category.label
                              )}
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="entry__info__row__text">
                      <a>
                        Techonologies
                        <div className="entry__info__row__text__message">
                          {item.techonologies.map(
                            (category) => category.label + ", "
                          )}
                        </div>
                      </a>
                    </div>
                  )}
                  <div className="entry__info__row__text">
                    {item.isOur.map((item) => item.label)}
                  </div>
                  <div className="entry__info__row__text">{item.url}</div>
                  <div className="entry__info__row__text">
                    <a>
                      View Description
                      <div className="entry__info__row__text__message">
                        {item.description}
                      </div>
                    </a>
                  </div>

                  <div className="entry__info__row__text">{item.quotation}</div>
                  <div className="entry__info__row__text">
                    {item.quotationAuthor}
                  </div>
                  <div className="entry__info__row__text">
                    {item.quotationDesignation}
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
          deleteConfirmationURL="delete_project"
          deleteConfirmationId={deleteConfirmationId}
          fetch="https://dsmeglobal-api.herokuapp.com/api/v1/get_project"
        />
      ) : null}
    </>
  );
}
