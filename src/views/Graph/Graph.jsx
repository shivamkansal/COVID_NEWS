// import React from "react";
// import { Line, Bar } from "react-chartjs-2";

// import Confirmed from "./ConfirmedGraph";
// import Deaths from "./DeathsGraph";
// import Recoveries from "./RecoveredGraph";
// import Tested from "./TestedGraphs";

// import styles from "./Graph.module.css";

// const Graph = ({ data, testedData }) => {
//   return (
//     <div className={styles.containerWhole}>
//       <div className={styles.containerConfirmed}>
//         <Confirmed data={data} />
//       </div>
//       <div className={styles.containerRecovered}>
//         <Recoveries data={data} />
//       </div>
//       <div className={styles.containerDeaths}>
//         <Deaths data={data} />
//       </div>
//       <div className={styles.containerTested}>
//         <Tested tested={testedData} />
//       </div>
//     </div>
//   );
// };

// export default Graph;
import React from "react";
import { Line, Bar } from "react-chartjs-2";

import Confirmed from "./ConfirmedGraph";
import Deaths from "./DeathsGraph";
import Recoveries from "./RecoveredGraph";
import Tested from "./TestedGraphs";
import Footer from "../../components/Footer/footer";

import styles from "./Graph.module.css";

const Graph = ({ data, testedData }) => {
  return (
    <>
      <div className={styles.containerWhole}>
        <div className={styles.eachContainer}>
          <Confirmed data={data} />
        </div>
        <div className={styles.eachContainer}>
          <Recoveries data={data} />
        </div>
        <div className={styles.eachContainer}>
          <Deaths data={data} />
        </div>
        <div className={styles.eachContainer}>
          <Tested tested={testedData} />
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <Footer />
      </div>
    </>
  );
};

export default Graph;
