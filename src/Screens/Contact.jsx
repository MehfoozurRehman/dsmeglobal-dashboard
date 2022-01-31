import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";

export default function Contact({
  setDeleteConfirmation,
  setDeleteConfirmationId,
  setDeleteConfirmationURL,
}) {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/v1/get_contact").then((res) => {
      setContactData(res.data);
    });
  }, []);

  const tableHeadingRow = [
    { heading: "" },
    { heading: "Name" },
    { heading: "Email" },
    { heading: "Phone" },
    { heading: "Subject" },
    { heading: "Message" },
  ];

  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Contact</div>
        <div className="main__container__header__buttons"></div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          {contactData.length > 0 ? (
            contactData.map((item, i) => (
              <div className="entry__info__row" key={i}>
                <div className="entry__info__row__btns">
                  <button
                    onClick={() => {
                      setDeleteConfirmation(true);
                      setDeleteConfirmationId(item._id);
                      setDeleteConfirmationURL("/delete_contact");
                    }}
                    className="secondary__button__rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
                <div className="entry__info__row__text">{item.username}</div>
                <div className="entry__info__row__text">{item.email}</div>
                <div className="entry__info__row__text">{item.phone}</div>
                {item.subject.length < 40 ? (
                  <div className="entry__info__row__text">{item.subject}</div>
                ) : (
                  <div className="entry__info__row__text">
                    <a>
                      View Subject
                      <div className="entry__info__row__text__message">
                        {item.subject}
                      </div>
                    </a>
                  </div>
                )}
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
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}
