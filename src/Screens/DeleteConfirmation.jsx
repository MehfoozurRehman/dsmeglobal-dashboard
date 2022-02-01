import axios from "axios";
import React from "react";

export default function DeleteConfirmation({
  closeOnClick,
  deleteConfirmationId,
  deleteConfirmationURL,
}) {
  return (
    <div className="popup__container">
      <form action="" className="popup__container__form">
        <div className="popup__container__form__header">
          <div>Are you sure you want to delete</div>
        </div>
        <div style={{ display: "flex" }}>
          <button
            onClick={() => {
              axios
                .delete(
                  `${process.env.REACT_APP_API_URL}api/v1` +
                    deleteConfirmationURL,
                  {
                    data: { _id: deleteConfirmationId },
                  }
                )
                .then(function (response) {
                  console.log(response);
                  // setTimeout(() => {
                  //   window.location.reload();
                  // }, 1000);
                  closeOnClick(false);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
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
            style={{ marginTop: "1em" }}
            className="secondary__button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
