import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 style={{ color: "white" }} className="title">
              Covid News
            </h5>
            <p style={{ color: "grey" }}>
              • All Trending News related to COVID-19 in India. (Smart Table
              API) <br />• COVID-19 Tracker (Statistics & Map View) Using
              covid19india.org API for India. <br /> • Other Important
              information about COVID-19 <br />• A ReactJs Project
            </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="/"> Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/stats">Statistics</a>
              </li>
              <li className="list-unstyled">
                <a href="/symptoms">Symptoms</a>
              </li>
              <li className="list-unstyled">
                <a href="/prevention">Prevention</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>&copy; {new Date().getFullYear()}</MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
