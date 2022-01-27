import React from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";
import Loader from "./Loader";
import tableEntryPic from "../Assets/tableEntryPic.png";

export default function Contact() {
  const tableHeadingRow = [
    { heading: "Name" },
    { heading: "Last Name" },
    { heading: "Email" },
    { heading: "DOB" },
    { heading: "Gender" },
    { heading: "Phone" },
    { heading: "Message" },
    { heading: "" },
  ];

  const tableInfoRow = [
    { info: "Fahad" },
    { info: "Ayyaz" },
    { info: "abc123@gmail.com" },
    { info: "1-4-2001" },
    { info: "Male" },
    { info: "0320-2332134" },
    {
      info: "View Message",
      type: "message",
      label:
        "Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm",
    },
    { placeholder: "Delete", type: "btn_primary", path: "/dashboard" },
  ];
  const list = [
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
    {
      id: "0",
    },
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
          {list.length > 0 ? (
            list.map(() => (
              <div class="entry__info__row">
                <div class="entry__info__row__text">Fahad</div>
                <div class="entry__info__row__text">Last Name</div>
                <div class="entry__info__row__text">abc123@gmail.com</div>
                <div class="entry__info__row__text">1-4-2001</div>
                <div class="entry__info__row__text">Male</div>
                <div class="entry__info__row__text">0320-2332134</div>
                <div className="entry__info__row__text">
                  <a href="">
                    View Message
                    <div className="entry__info__row__text__message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam, iure consectetur nesciunt dolores reiciendis vero
                      rem aliquam at explicabo quisquam itaque voluptatum sit
                      fugiat sunt repudiandae. Commodi est odit similique
                      distinctio totam eaque ullam. Itaque eius magnam
                      distinctio optio enim.
                    </div>
                  </a>
                </div>
                <div style={{ marginRight: 10 }}>
                  <Button
                    placeholder="Delete"
                    type="button"
                    className="primary__button"
                    onClick={() => {}}
                  />
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
