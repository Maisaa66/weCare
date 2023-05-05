import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
const Charts = function () {
  const [chartData, setChartData] = useState(null);
  let providersNumData, usersNumData, serviceLocationsData, serviceTypeData;
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching");
      try {
        const response = await axios.get(
          "http://localhost:7000/api/v1/stats?start=2023-04-30&end=2023-05-07",
          {
            withCredentials: true,
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:3000",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.data;
        const stats = data.stats;
        console.log(stats);
        setChartData(stats);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);
  //   const chartData = [
  //     { label: "Ahmed", count: 30 },
  //     { label: "Sara", count: 60 },
  //     { label: "Ayman", count: 10 },
  //   ];

  if (chartData !== null) {
    providersNumData = {
      labels: chartData.providersOverPassedWeek.map((item) => item.label),
      datasets: [
        {
          label: "Providers Over Passed Week",
          data: chartData.providersOverPassedWeek.map((item) => item.count),
          backgroundColor: [
            "#60B5FF",
            "#F86010",
            "#A0B0AE",
            "#FFBB00",
            "#3E72FF",
            "#62E102",
            "#962B00",
          ],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
    usersNumData = {
      labels: chartData.usersOverPassedWeek.map((item) => item.label),
      datasets: [
        {
          label: "Users Over Passed Week",
          data: chartData.usersOverPassedWeek.map((item) => item.count),
          backgroundColor: [
            "#60B5FF",
            "#F86010",
            "#A0B0AE",
            "#FFBB00",
            "#3E72FF",
            "#62E102",
            "#962B00",
          ],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
    serviceTypeData = {
      labels: chartData.serviceTypeStats.map((item) => item.label),
      datasets: [
        {
          label: "Service Types",
          data: chartData.serviceTypeStats.map((item) => item.count),
          backgroundColor: [
            "#60B5FF",
            "#F86010",
            "#A0B0AE",
            "#FFBB00",
            "#3E72FF",
            "#62E102",
            "#962B00",
            "#476980",
            "#BC5090",
            "#EB5F5E",
          ],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
    serviceLocationsData = {
      labels: chartData.serviceLocationsStats.map((item) => item.label),
      datasets: [
        {
          label: "Service Locations",
          data: chartData.serviceLocationsStats.map((item) => item.count),
          backgroundColor: [
            "#60B5FF",
            "#F86010",
            "#A0B0AE",
            "#FFBB00",
            "#3E72FF",
            "#62E102",
            "#962B00",
          ],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  }
  if (chartData !== null) {
    return (
      <div className="d-flex flex-wrap">
        <div className="w-50 p-5">
          <Bar data={providersNumData}></Bar>
        </div>
        <div className="w-50 p-5">
          <Bar data={usersNumData}></Bar>
        </div>
        <div className="w-50 p-5">
          <Pie data={serviceTypeData}></Pie>
        </div>
        <div className="w-50 p-5">
          <Pie data={serviceLocationsData}></Pie>
        </div>
      </div>
    );
  } else {
    return <div>No Charts</div>;
  }
};

export default Charts;
