import { useState } from "react";
import "./HomeRevenue.css"
import LineChart from "./LineChart";
import { UserData } from "../Data";


const HomeRevenue = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [
      {
        label: "14 Feb",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#9DBCCD",
        borderWidth: 5,
        tension: 0.5,
      },
    ],
  });
    return(
      <>
      <div className="App">
    </div>
    <div>
        <div className="home-titles">
          <h2 className="home-title">Revenue</h2>
          <h3 className="home-subtitle">Last 7 days VS prior week</h3>
          </div>
          <div className="line-chart">
          <LineChart chartData={userData} />
        </div>
      </div>

      </>
    )
}

export default HomeRevenue