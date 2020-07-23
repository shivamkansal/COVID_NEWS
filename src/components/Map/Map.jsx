import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import styles from "./Map.module.css";

// import { fetchStateWise } from "../../api";

//try start

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

import LinearGradient from "./LinearGradient.js";

const INDIA_TOPO_JSON = require("./India.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937]
};

// Red Variants
const COLOR_RANGE = [
  "#FFFAFA",
  "#FFE5E5",
  "#FFD9D9",
  "#FFC1C1",
  "#FF9393",
  "#FF7777",
  "#f85b5b",
  "#d61d1d",
  "#8b0f0f"
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    outline: "none"
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none"
  },
  pressed: {
    outline: "none"
  }
};

const ChoroplethMap = props => {
  const [tooltipContent, setTooltipContent] = useState("");
  // const [mapData, setMapData] = useState(props.data);

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: props.data.reduce(
      (max, item) => (item.confirmed > max ? item.confirmed : max),
      0
    )
  };

  const colorScale = scaleQuantile()
    .domain(props.data.map(d => d.confirmed))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { confirmed: "NA" }) => {
    return () => {
      setTooltipContent(
        `${geo.properties.name}: Confirmed-${current.confirmed}; Deaths-${
          current.deaths
        }`
      );
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  // const onChangeButtonClick = () => {
  //   setMapData(props.data);
  // };
  return (
    <div className={styles.container}>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map(geo => {
              const current = props.data.find(s => s.statecode === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.confirmed) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {/* <LinearGradient data={gradientData} /> */}
      {/* <div className="center">
        <button className="mt16" onClick={onChangeButtonClick}>
          Change
        </button>
      </div> */}
    </div>
  );
};

export default ChoroplethMap;
