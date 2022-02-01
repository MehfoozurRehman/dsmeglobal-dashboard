import React, { useState } from "react";
import UserStatisticsChart from "../Components/UserStatisticsChart";
import chart from "../Assets/Chart.png";
import userPic from "../Assets/userPic.png";

function UserFrom({ stroke, label }) {
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

function UserStatisticsCard() {
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

function StatsCard({ stroke }) {
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
function MonthlyStatsCard({ stroke, labal, valueInPercentage }) {
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

function InvestorCard() {
  return (
    <div className="recent__panel__content__card">
      <div className="recent__panel__content__card__content">
        <div className="recent__panel__content__card__content__heading">
          Fundraise name <span>Mehfooz</span>
        </div>
        <div className="recent__panel__content__card__content__heading">
          Date Created <span>Mehfooz</span>
        </div>
        <div className="recent__panel__content__card__content__heading">
          Fund Raised <span>Mehfooz</span>
        </div>
        <div className="recent__panel__content__card__content__heading">
          Target <span>Mehfooz</span>
        </div>
      </div>
    </div>
  );
}

function StartupCard() {
  return (
    <div className="recent__panel__content__card">
      <img
        src={userPic}
        alt="userPic"
        className="recent__panel__content__card__img"
      />
      <div className="recent__panel__content__card__content">
        <div className="recent__panel__content__card__content__heading">
          Fundraise name <span>Mehfooz</span>
        </div>
        <div className="recent__panel__content__card__content__heading">
          Date Created <span>Mehfooz</span>
        </div>
        <div className="recent__panel__content__card__content__heading">
          Fund Raised <span>Mehfooz</span>
        </div>
        <div className="recent__panel__content__card__content__heading">
          Target <span>Mehfooz</span>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__col">
        <UserStatisticsCard />
        <StatsCard stroke="#0f593e" />
      </div>
      <div className="dashboard__container__col">
        <MonthlyStatsCard
          valueInPercentage="56%"
          stroke="#0f593e"
          labal="Investor"
        />
        <MonthlyStatsCard
          valueInPercentage="40%"
          stroke="#00040e"
          labal="Startup"
        />
        <StatsCard stroke="#00040e" />
      </div>
    </div>
  );
}
