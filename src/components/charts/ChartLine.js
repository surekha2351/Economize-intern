import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { faker } from "@faker-js/faker";

import './ChartLine.css'

Chart.register(CategoryScale);

function ChartLine() {
  const labels = ["12:00 AM", "Now", "11:59 PM"];
  

  const generateData = () => {
    return labels.map(() => faker.datatype.number({ min: 0, max: 100 }));
  };

  const data = {
    labels,
    datasets: [
     
      {
        label: "Dataset 1",
        data: generateData(),
        borderColor: "rgb(53, 162, 235)",
       
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Dataset 2",
        data: generateData(),
        borderColor: "grey",
        
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div className="chart-container">
      <Line options={options} data={data} height={'100%'} />
    </div>
  );
}

export default ChartLine;
