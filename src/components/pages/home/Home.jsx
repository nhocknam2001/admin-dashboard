import React from "react";
import "./home.scss";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../chart/Chart";
import { userData } from "../../../dummyData";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
