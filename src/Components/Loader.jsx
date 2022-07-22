import React from "react";
import loading from "../Assets/loading.svg";

export default function Loader({ height }) {
  return (
    <div className="loader" style={height ? { height: "100vh" } : null}>
      <img loading="lazy" src={loading} alt="Loader" className="loader__img" />
    </div>
  );
}
