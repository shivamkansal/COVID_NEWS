// export default Prevention;
import React, { Component } from "react";
import { Media, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./Prevention.module.css";

//images
import washImg from "../../assets/images/wash.png";
import socialdistancingImg from "../../assets/images/socialDistancing.png";
import touchingImg from "../../assets/images/touching.png";
import hygieneImg from "../../assets/images/hygiene.png";
import Footer from "../../components/Footer/footer";

import styles from "./Prevention.module.css";

class Prevention extends Component {
  render() {
    return (
      <>
        <div className={styles.containerPrev}>
          <center>
            <h1>COVID-19 Prevention From Coronavirus</h1>
            <p>
              There’s currently no vaccine to prevent coronavirus disease
              (COVID-19).
            </p>
          </center>
          <div class="container">
            <p
              style={{
                color: "red"
              }}
            >
              <strong>
                Note: Prevention from corona virus is completely in your hands.
                Maintaining proper hygiene and social distancing are the only
                key. Apart from this also try to take healthy diet to boost your
                immune system.
              </strong>
            </p>
          </div>
          <div class="container">
            <h3 style={{ color: "#4f8a8b" }}>How to Protect Yourself?</h3>
            <p>
              The best way to prevent illness is to avoid being exposed to this
              virus. Corona vaccines are in process of development and we expect to get them by the end of 2020
            </p>

            <div className={styles.stepsList}>
              <Media className={styles.eachList}>
                <Media body>
                  <Media heading>
                    <h2>
                      <center>
                        <img src={washImg} alt="wash hands" />
                        Wash your hands frequently
                      </center>
                    </h2>
                  </Media>
                  Regularly and thoroughly clean your hands with an
                  alcohol-based hand rub or wash them with soap and water for at
                  least 20 seconds. Why? Washing your hands with soap and water
                  or using alcohol-based hand rub kills viruses that may be on
                  your hands.
                </Media>
              </Media>
              <Media className={styles.eachList}>
                <Media body>
                  <Media heading>
                    <h2>
                      <center>
                        <img
                          src={socialdistancingImg}
                          alt="social Distancing"
                        />
                        Maintain social distancing
                      </center>
                    </h2>
                  </Media>
                  Maintain at least 1 metre (3 feet) distance between yourself &
                  anyone who is coughing or sneezing. If you are too close, you
                  get chance to get infected. Why? When someone coughs or
                  sneezes they spray small liquid droplets from their nose or
                  mouth which may contain virus. If you are too close, you can
                  breathe in the droplets, including the COVID-19 virus if the
                  person coughing has the disease.
                </Media>
              </Media>
              <Media className={styles.eachList}>
                <Media body>
                  <Media heading>
                    <h2>
                      <center>
                        <img src={touchingImg} alt="Touch face" />
                        Avoid touching face
                      </center>
                    </h2>
                  </Media>
                  Do not touch your eyes, nose or mouth if your hands are not
                  clean. Why? Hands touch many surfaces and can pick up viruses.
                  Once contaminated, hands can transfer the virus to your eyes,
                  nose or mouth. From there, the virus can enter your body and
                  can make you sick.
                </Media>
              </Media>
              <Media className={styles.eachList}>
                <Media body>
                  <Media heading>
                    <h2>
                      <center>
                        <img src={hygieneImg} alt="maintain hygiene" />
                        Practice respiratory hygiene
                      </center>
                    </h2>
                  </Media>
                  Make sure you, & the people around you, follow good
                  respiratory hygiene. This means covering your mouth & nose
                  with your bent elbow or tissue when you cough or sneeze. Why?
                  Droplets spread virus. By following good respiratory hygiene
                  you protect the people around you from viruses such as cold,
                  flu and COVID-19.
                </Media>
              </Media>
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

export default Prevention;
