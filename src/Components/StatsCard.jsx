import React from "react";
import chart from "../Assets/Chart.png";

export function StatsCard({ stroke }) {
  return (
    <div className="stats__card" style={{ backgroundColor: stroke }}>
      <img src={chart} alt="chart" className="stats__card__img" />
      <div className="stats__card__content">
        <div className="stats__card__content__heading">Toal Expense</div>
        <div className="stats__card__content__value">$12,900</div>
      </div>
    </div>
  );
}
