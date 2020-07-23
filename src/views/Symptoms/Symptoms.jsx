import React, { Component } from "react";
import { div, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./Symptoms.module.css";

//images
import feverImg from "../../assets/images/sick.png";
import sickImg from "../../assets/images/breathing.png";
import coughImg from "../../assets/images/cough.png";
import Footer from "../../components/Footer/footer";

import styles from "./Symptoms.module.css";

class Symptoms extends Component {
  render() {
    return (
      <>
        <div className={styles.containerSymp}>
          <center>
            <h1>COVID-19 Coronavirus - Symptoms</h1>
            <p>
              There’s currently no vaccine to prevent coronavirus disease
              (COVID-19).
            </p>
          </center>

          <div className="container">
            <p
              style={{
                color: "red"
              }}
            >
              <strong>
                Note: In case of any of the symptoms mentioned below you should
                not leave your home. You should lockdown yourself in a room and
                should avoid contact with any family member.
              </strong>
            </p>
          </div>

          <div className="container">
            <h2>Symptoms of Coronavirus</h2>
            <p>
              The most common symptoms of COVID-19 are fever, tiredness, and dry
              cough. Some patients may have aches and pains, nasal congestion,
              runny nose, sore throat or diarrh
            </p>

            <div className={styles.allContainers}>
              <div className={styles.eachContainer}>
                {/* <div className={styles.contentMain}> */}
                <h2>
                  <center>
                    <img src={feverImg} alt="Fever" />
                    <span> Fever</span>
                  </center>
                </h2>
                <strong>High Fever – </strong> This means you feel hot to touch
                on your chest or back (you do not need to measure your
                temperature). It is a common sign & also may appear in 2-10 days
                if affected.
                {/* </div> */}
              </div>

              <div className={styles.eachContainer}>
                {/* <div className={styles.contentMain}> */}
                <h2>
                  <center>
                    <img src={coughImg} alt="Cough" />
                    <span> Cough</span>
                  </center>
                </h2>
                <strong>Continuous cough – </strong> this means coughing a lot
                for more than an hour, or 3 or more coughing episodes in 24
                hours (if you usually have a cough, it may be worse than usual).
                {/* </div> */}
              </div>

              <div className={styles.eachContainer}>
                {/* <div className={styles.contentMain}> */}
                <h2>
                  <center>
                    <img src={sickImg} alt="Sick" />
                    <span>Shortness of breath</span>
                  </center>
                </h2>
                <strong>Difficulty breathing – </strong> Around 1 out of every 6
                people who gets COVID-19 becomes seriously ill and develops
                difficulty breathing or shortness of breath.
                {/* </div> */}
              </div>
            </div>
            <div>
              <div className={styles.othersymptoms}>
                <div>
                  <h2>
                    <center>Others Symptoms</center>
                  </h2>
                  Some patients may have aches and pains, nasal congestion,
                  runny nose, sore throat or diarrhoea. These symptoms are
                  usually mild & begin gradually. Some people become infected
                  but don’t develop any symptoms & don't feel unwell. Most
                  people (about 80%) recover from the disease without needing
                  special treatment. <br /> <br />
                  Around 1 out of every 6 people who gets COVID-19 becomes
                  seriously ill and develops difficulty breathing. Older people,
                  and those with underlying medical problems like high blood
                  pressure, heart problems or diabetes, are more likely to
                  develop serious illness.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <Footer />
        </div>
      </>
    );
  }
}

export default Symptoms;
