import React from "react";
import { UserStatisticsCard } from "../Components/UserStatisticsCard";
import { MonthlyStatsCard } from "../Components/MonthlyStatsCard";
import { StatsCard } from "../Components/StatsCard";

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
