import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";
import { useNavigate } from "react-router-dom";
import { GetAllInvestor } from "../Apis/Investor.js";
import Loader from "./Loader";

export default function Investor({ setIsAddInvestor, setIsEditInvestor }) {
  const tableHeadingRow = [
    { heading: "Name" },
    { heading: "Email" },
    { heading: "Type" },
    { heading: "Startup Stage" },
    // { heading: "Ticket Size" },
    // { heading: "Industry" },
    // { heading: "Business model" },
    // { heading: "Plan" },
    { heading: "Action" },
    { heading: "" },
  ];
  useEffect(() => {
    investorList();
  }, []);

  const tableInfoRow = [
    { info: "Zunaira" },
    { info: "abc123@gmail.com" },
    { info: "New Entrant" },
    // { info: "Seed" },
    // { info: "<$2341" },
    // { info: "Fintech" },
    // { info: "B2B" },
    // { info: "<5 Year" },
    // { placeholder: "Edit", type: "btn_secondary", onClick: setIsEditInvestor },
    // { placeholder: "Delete", type: "btn_primary", onClick: () => {} },
  ];
  const [investorData, setInvestorData] = useState([]);
  const investorList = () => {
    GetAllInvestor()
      .then((res) => {
        if (res.data.success === true) {
          debugger;
          setInvestorData(res.data.result);
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Investor</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Investor"
            className="primary__button"
            onClick={() => {
              setIsAddInvestor(true);
            }}
          />
        </div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          {investorData.length > 0 ? (
            investorData.map((emp, index) => (
              <div class="entry__info__row">
                <div class="entry__info__row__text">
                  {emp.usermeta[0].UserValue}
                </div>
                <div class="entry__info__row__text">{emp.Email}</div>
                <div class="entry__info__row__text">
                  {emp.UserType == 1 ? "Investor" : ""}
                </div>
                <div class="entry__info__row__text">
                  {emp.usermeta[1].UserValue}
                </div>
                <div style={{ marginRight: 10 }}>
                  <Button
                    // path={path}
                    onClick={setIsEditInvestor}
                    placeholder="Edit"
                    type="button"
                    className="secondary__button"
                  />
                </div>
                <div style={{ marginRight: 10 }}>
                  <Button
                    // path={path}
                    onClick={() => { }}
                    type="button"
                    placeholder="Delete"
                    className="primary__button"
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
