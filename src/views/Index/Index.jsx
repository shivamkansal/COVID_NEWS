import React, { Component } from "react";

//components
import Cards from "../../components/Cards/Cards";
import News from "../../components/News/News";
import ChoroplethMap from "../../components/Map/Map";
import SimpleTabs from "../../components/Tabs/Tabs";
import Footer from "../../components/Footer/footer";
import styles from "./Index.module.css";

class Index extends Component {
  render() {
    const { data, news, statewise } = this.props;

    return (
      <>
        <div className={styles.container}>
          <section className={styles.cards}>
            <Cards data={data} />
          </section>
          <section className={styles.newsAndMap}>
            <News news={news} />
            <ChoroplethMap data={statewise} />
          </section>
          <section className={styles.tabs}>
            <SimpleTabs />
          </section>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
