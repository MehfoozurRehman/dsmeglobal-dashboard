import axios from "axios";
import React from "react";

export default function DeleteConfirmation({
  closeOnClick,
  deleteConfirmationId,
  deleteConfirmationURL,
  fetch,
}) {
  function onDelete() {
    axios.delete(
      `https://dsmeglobal-api.herokuapp.com/api/v1/` + deleteConfirmationURL,
      {
        data: { _id: deleteConfirmationId },
      }
    );
    closeOnClick(false);
    fetch();
  }
  return (
    <div className="popup__container">
      <div className="popup__container__form">
        <div className="popup__container__form__header">
          <div>Are you sure you want to delete</div>
        </div>
        <div style={{ display: "flex" }}>
          <button
            onClick={onDelete}
            style={{
              marginTop: "1em",
              marginRight: "1em",
            }}
            className="primary__button"
          >
            Delete
          </button>
          <button
            onClick={() => {
              closeOnClick(false);
            }}
            type="button"
            style={{ marginTop: "1em" }}
            className="secondary__button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
