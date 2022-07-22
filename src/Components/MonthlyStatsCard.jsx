import React from "react";

export function MonthlyStatsCard({ stroke, labal, valueInPercentage }) {
  return (
    <div className="monthly__stats__card">
      <div className="monthly__stats__card__header">
        <div className="monthly__stats__card__heading">{labal}</div>
        <div className="monthly__stats__card__sub__heading">This Month</div>
      </div>
      <div className="monthly__stats__card__content">
        <div className="monthly__stats__card__bar">
          <div
            className="monthly__stats__card__bar__filled"
            style={{ minWidth: valueInPercentage, backgroundColor: stroke }}
          ></div>
        </div>
        <div className="monthly__stats__card__content__value">56</div>
      </div>
    </div>
  );
}
