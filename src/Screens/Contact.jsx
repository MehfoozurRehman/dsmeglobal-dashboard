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
    { heading: "Name" },
    { heading: "Email" },
    { heading: "Phone" },
    { heading: "Subject" },
    { heading: "Message" },
    { heading: "" },
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
            contactData.map((item) => (
              <div class="entry__info__row">
                <div class="entry__info__row__text">{item.username}</div>
                <div class="entry__info__row__text">{item.email}</div>
                <div class="entry__info__row__text">{item.phone}</div>
                {item.subject.length < 40 ? (
                  <div class="entry__info__row__text">{item.subject}</div>
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
                  <div class="entry__info__row__text">{item.message}</div>
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

                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={() => {
                      setDeleteConfirmation(true);
                      setDeleteConfirmationId(item._id);
                      setDeleteConfirmationURL("/delete_contact");
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
