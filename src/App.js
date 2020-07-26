import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import SideNav from "./components/Navbar/Navbar";

//views
import Index from "./views/Index/Index";
import Graph from "./views/Graph/Graph";
import Prevention from "./views/Prevention/Prevention";
import Symptoms from "./views/Symptoms/Symptoms";
import Essentials from "./views/Essentials/Essentials";
import Faq from "./views/Faq/Faq";
import "bootstrap/dist/css/bootstrap.min.css";
//api
import { fetchNews, fetchData, fetchStateWise } from "./api";

export default class App extends Component {
  state = {
    news: [],
    data: {},
    statesDaily: [],
    statewise: [],
    cases_time_series: [],
    tested: []
  };

  async componentDidMount() {
    const data = await fetchData();
    const { statewise, cases_time_series, tested } = await fetchStateWise();
    const { news } = await fetchNews();
    console.log(news, "news");

    this.setState({ news, data, statewise, cases_time_series, tested });
  }

  render() {
    const { news, data, statewise, cases_time_series, tested } = this.state;
    return (
      <Fragment>
        <Router>
          <SideNav />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Index
                  {...props}
                  data={data}
                  statewise={statewise}
                  news={news}
                />
              )}
            />
            <Route path="/symptoms" component={Symptoms} />
            <Route path="/prevention" component={Prevention} />
            <Route
              path="/stat"
              render={props => (
                <Graph
                  {...props}
                  data={cases_time_series}
                  testedData={tested}
                />
              )}
            />
            <Route path="/essentials" component={Essentials} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
