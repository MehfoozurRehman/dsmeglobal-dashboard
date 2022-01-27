import React from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";
import Loader from "./Loader";
import tableEntryPic from "../Assets/tableEntryPic.png";

export default function Client({ setIsEditClient, setIsAddClient }) {
  const tableHeadingRow = [
    { heading: "Client Image" },
    { heading: "Client Name" },
    { heading: "" },
    { heading: "" },
  ];

  const tableInfoRow = [
    { type: "img" },
    { info: "IQ Doctor" },
    {
      placeholder: "Edit",
      type: "btn_secondary",
      onClick: setIsEditClient,
    },
    {
      placeholder: "Delete",
      type: "btn_primary",
      onClick: () => {},
    },
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
        <div className="main__container__header__heading">Client</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Client"
            className="primary__button"
            onClick={setIsAddClient}
          />
        </div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          {list.length > 0 ? (
            list.map(() => (
              <div class="entry__info__row">
                <div className="entry__info__row__text">
                  <img
                    src={tableEntryPic}
                    alt="tableEntryPic"
                    className="entry__info__row__text__img"
                  />
                </div>
                <div class="entry__info__row__text">0320-2332134</div>
                <div style={{ marginRight: 10 }}>
                  <Button
                    placeholder="Edit"
                    type="button"
                    className="secondary__button"
                    onClick={setIsEditClient}
                  />
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
