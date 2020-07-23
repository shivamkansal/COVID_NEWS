import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

// import styles from "./Timeline.module.css";

class Timeline1 extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <VerticalTimeline>
        {data.map(timelineElement => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: `${timelineElement.background}`,
                color: "#000"
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${timelineElement.background}`,
                fontSize: "0.2rem"
              }}
              date={timelineElement.date}
              iconStyle={{
                background: `${timelineElement.background}`,
                color: "#fff"
              }}
              icon={<FontAwesomeIcon icon={faVirus} />}
              key={timelineElement.date}
            >
              {/* <h3 className="vertical-timeline-element-title">Creative Director</h3> */}
              <h4
                style={{ fontSize: "1rem" }}
                className="vertical-timeline-element-subtitle"
              >
                {timelineElement.description}
              </h4>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    );
  }
}

export default Timeline1;
