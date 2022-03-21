import React from "react";
import loading from "../Assets/loading.svg";

export default function Loader() {
  return (
    <div className="loader">
      <img src={loading} alt="Loader" className="loader__img" />
    </div>
  );
}
