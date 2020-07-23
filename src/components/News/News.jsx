import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./News.module.css";
import { style } from "d3";

class News extends React.Component {
  render() {
    const { news } = this.props;
    console.log(news, ".jsx");
    return (
      <div className={styles.container}>
        <h1>Top News</h1>
        <ul className={styles.newsList}>
          {news.map(article => (
            <li key={article.title} className={styles.newsListItem}>
              <h3 className={styles.head3}>{article.title}</h3>
              <h4 className={styles.head4}>{article.excerpt}</h4>
              <h5 className={styles.head5}>
                Published {moment(article.publishedDateTime).calendar()}
              </h5>
              <a
                href={article.ampWebUrl}
                className={styles.newsLink}
                target="_blank"
              >
                <h4 className={styles.head4link}>
                  Read full story <FontAwesomeIcon icon={faExternalLinkAlt} />
                </h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default News;
