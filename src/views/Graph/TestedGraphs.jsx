import React from "react";
import { Line, Bar } from "react-chartjs-2";

import styles from "./LineGraph.module.css";

const Graph = ({ tested }) => {
  const lineChart = tested.length ? (
    <Line
      data={{
        labels: tested.map(({ updatetimestamp }) => updatetimestamp),
        datasets: [
          {
            data: tested.map(({ totalpositivecases }) => totalpositivecases),
            label: "Daily Tested",
            borderColor: "#CCCC00",
            fill: true
          }
        ]
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Graph;
