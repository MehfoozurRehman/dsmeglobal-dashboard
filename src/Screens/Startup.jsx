import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";
import { GetAllStartup } from "../Apis/Startup.js";
import Loader from "./Loader";
import tableEntryPic from "../Assets/tableEntryPic.png";

export default function Startup({ setIsAddStartup, setIsEditStartup }) {
  const tableHeadingRow = [
    { heading: "Image" },
    { heading: "Name" },
    { heading: "Website" },
    { heading: "Industry" },
    { heading: "Startup Stage" },
    { heading: "Startup Model" },
    { heading: "" },
    { heading: "" },
    { heading: "" },
  ];

  const [startupData, setStartupData] = useState([]);
  const startUpList = () => {
    GetAllStartup()
      .then((res) => {
        if (res.data.success === true) {
          debugger;
          setStartupData(res.data.result);
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    startUpList();
  }, []);
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
  const tableInfoRow = [
    { type: "img" },
    { info: "Fahad" },
    { info: "www.something.com" },
    { info: "Finetech" },
    { info: "Seed" },
    { info: "B2B" },

    {
      placeholder: "Edit",
      type: "btn_secondary",
      onClick: setIsEditStartup,
    },
    {
      placeholder: "Details",
      type: "btn_secondary",
      path: "/Dashboard/startup-details",
    },
    { placeholder: "Delete", type: "btn_primary", onClick: () => {} },
  ];
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Startup</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Startup"
            className="primary__button"
            onClick={() => {
              setIsAddStartup(true);
            }}
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
                <div class="entry__info__row__text">Fahad</div>
                <div class="entry__info__row__text">www.something.com</div>
                <div class="entry__info__row__text">Finetech</div>
                <div class="entry__info__row__text">Seed</div>
                <div class="entry__info__row__text">B2B</div>
                <div style={{ marginRight: 10 }}>
                  <Button
                    placeholder="Edit"
                    type="button"
                    className="secondary__button"
                    onClick={setIsEditStartup}
                  />
                </div>
                <div style={{ marginRight: 10 }}>
                  <Button
                    placeholder="Details"
                    type="button"
                    className="secondary__button"
                    path="/Dashboard/startup-details"
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
