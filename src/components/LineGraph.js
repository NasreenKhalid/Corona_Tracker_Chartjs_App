import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph(props) {
  return (
    <div
    style={{
        width:'600px',
        height:'600px',
        margin: '50px auto'
    }}
    >
      <Line
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
          datasets: [
            {
              label: "# of Cases",
              data: props.yAxis,
              lineTension:0.1,
              fill: false,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
              pointRadius:1
            },
          ],
        }}
      />
    </div>
  );
}

export default LineGraph;
