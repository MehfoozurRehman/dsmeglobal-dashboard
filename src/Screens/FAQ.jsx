import React from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";
import Loader from "./Loader";
import tableEntryPic from "../Assets/tableEntryPic.png";

export default function FAQ({ setIsAddQuestion, setIsEditQuestion }) {
  const tableHeadingRow = [
    { heading: "Question" },
    { heading: "" },
    { heading: "" },
    { heading: "Answer" },
    { heading: "" },
    { heading: "" },
  ];

  const tableInfoRow = [
    {
      info: "My vision is to imtroduce crowdfunding as a safe and viable fundeaising option for Pakistan's start-ups fundeaising option Pakistan's start-ups?",
    },
    {
      info: "View Message",
      type: "message",
      label:
        "My vision is to imtroduce crowdfunding as a safe and viable fundeaising option for Pakistan's start-ups fundeaising option Pakistan's start-upsMy vision is to imtroduce crowdfunding as a safe and viable fundeaising option for Pakistan's start-ups fundeaising option Pakistan's start-ups",
    },
    {
      placeholder: "Edit",
      type: "btn_secondary",
      onClick: setIsEditQuestion,
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
        <div className="main__container__header__heading">FAQ</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Question"
            className="primary__button"
            onClick={setIsAddQuestion}
          />
        </div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          {list.length > 0 ? (
            list.map(() => (
              <div class="entry__info__row">
                <div class="entry__info__row__text">
                  "My vision is to imtroduce crowdfunding as a safe and viable
                  fundeaising option for Pakistan's start-ups fundeaising option
                  Pakistan's start-ups?"
                </div>
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
                    placeholder="Edit"
                    type="button"
                    className="secondary__button"
                    onClick={setIsEditQuestion}
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
