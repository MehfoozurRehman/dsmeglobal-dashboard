import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";
import { GetAllMilestone } from "../Apis/Milestone.js";
import Loader from "./Loader";

export default function Milestones({ setIsAddMilestone, setIsEditMilestone }) {
  const tableHeadingRow = [
    { heading: "Title" },
    { heading: "Value" },
    { heading: "" },
    { heading: "" },
  ];
  useEffect(() => {
    milestoneList();
  }, []);
  const tableInfoRow = [
    { info: "Arranged Meetings" },
    { info: "56" },
    {
      placeholder: "Edit",
      type: "btn_secondary",
      onClick: setIsEditMilestone,
    },
    {
      placeholder: "Delete",
      type: "btn_primary",
      onClick: () => {},
    },
  ];
  const [milestoneData, setmilestoneData] = useState([]);
  const milestoneList = () => {
    debugger;
    GetAllMilestone()
      .then((res) => {
        if (res.data.success === true) {
          debugger;
          setmilestoneData(res.data.result);
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
        <div className="main__container__header__heading">Milestones</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Milestone"
            className="primary__button"
            onClick={() => {
              setIsAddMilestone(true);
            }}
          />
        </div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          {milestoneData.length > 0 ? (
            milestoneData.map((emp, index) => (
              <div class="entry__info__row">
                <div class="entry__info__row__text">{emp.Title}</div>
                <div class="entry__info__row__text">{emp.Value}</div>
                <div style={{ marginRight: 10 }}>
                  <Button
                    placeholder="Edit"
                    type="button"
                    className="secondary__button"
                    onClick={setIsEditMilestone}
                  />
                </div>
                <div style={{ marginRight: 10 }}>
                  <Button
                    placeholder="Edit"
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
