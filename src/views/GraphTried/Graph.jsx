// import React, { Component } from "react";
// import ChartRace from "react-chart-race";

// //data
// // import statesData from "./data.json";
// const statesData = require("./data.json");

// export default class Graph extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//     this.handleChange();
//     setInterval(() => {
//       this.handleChange();
//     }, 2000);
//   }

//   // getTotalCasesTillNow() {}

//   handleChange() {
//     const data = [
//       {
//         id: "Maharashtra",
//         title: "Ayfonkarahisar",
//         value: this.getRandomInt(10, 90),
//         color: "#50c4fe"
//       },
//       { id: 1, title: "Kayseri", value: 38, color: "#3fc42d" },
//       {
//         id: 2,
//         title: "Muğla",
//         value: this.getRandomInt(10, 90),
//         color: "#c33178"
//       },
//       {
//         id: 3,
//         title: "Uşak",
//         value: this.getRandomInt(10, 90),
//         color: "#423bce"
//       },
//       { id: 4, title: "Sivas", value: 58, color: "#c8303b" },
//       { id: 5, title: "Konya", value: 16, color: "#2c2c2c" }
//     ];
//   }

//   render() {
//     return (
//       <div style={{ margin: "100px" }}>
//         <h1>Chart Race Graph</h1>
//         <ChartRace
//           data={statesData}
//           backgroundColor="#000"
//           width={760}
//           padding={12}
//           itemHeight={58}
//           gap={12}
//           titleStyle={{ font: "normal 400 13px Arial", color: "#fff" }}
//           valueStyle={{
//             font: "normal 400 11px Arial",
//             color: "rgba(255,255,255, 0.42)"
//           }}
//         />
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import RacingBarChart from "./RacingBarChart";
import useInterval from "./useInterval";
// import "./App.css";

const getRandomIndex = array => {
  return Math.floor(Math.random());
};

function Graph() {
  const [iteration, setIteration] = useState(0);
  const [start, setStart] = useState(false);
  const [data, setData] = useState([
    { name: "Telangana", value: "21" },
    { name: "Rajasthan", value: "24" },
    { name: "Delhi", value: "27" },
    { name: "Uttar Pradesh", value: "28" },
    { name: "Kerala", value: "52" }
  ]);

  useInterval(() => {
    if (start) {
      const randomIndex = getRandomIndex();
      setData(
        data.map((entry, index) =>
          index === randomIndex
            ? {
                ...entry,
                value: entry.value + 10
              }
            : entry
        )
      );
      setIteration(iteration + 1);
    }
  }, 500);

  return (
    <React.Fragment>
      <h1>Racing Bar Chart</h1>
      <RacingBarChart data={data} />
      <button style={{ marginLeft: "100px" }} onClick={() => setStart(!start)}>
        {start ? "Stop the race" : "Start the race!"}
      </button>
      <p style={{ marginLeft: "100px" }}>Iteration: {iteration}</p>
    </React.Fragment>
  );
}

export default Graph;
