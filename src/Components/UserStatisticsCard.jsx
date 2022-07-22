import React from "react";
import UserStatisticsChart from "../Components/UserStatisticsChart";
import { UserFrom } from "./UserFrom";

export function UserStatisticsCard() {
  return (
    <div className="user__statistics__card">
      <div className="user__statistics__card__header">
        <div className="user__statistics__card__header__heading">
          User From sites
        </div>
        <div className="user__statistics__card__header__date">
          15 April - 15 May
        </div>
      </div>
      <div className="user__statistics__card__content">
        <div className="user__statistics__card__content__left">
          <UserStatisticsChart />
        </div>
        <div className="user__statistics__card__content__right">
          <UserFrom stroke="#0f593e" label="Facebook" />
          <UserFrom stroke="#0A2751" label="Instagram" />
          <UserFrom stroke="#00040e" label="Youtube" />
          <UserFrom stroke="#0B5FD8" label="Google" />
        </div>
      </div>
    </div>
  );
}
