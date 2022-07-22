import React from "react";

export function UserFrom({ stroke, label }) {
  return (
    <div className="user__statistics__card__content__right__from">
      <div
        className="user__statistics__card__content__right__from__dot"
        style={{ backgroundColor: stroke }}
      ></div>
      {label}
    </div>
  );
}
