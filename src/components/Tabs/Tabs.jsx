import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Timeline from "../Timeline/Timeline";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [data, setData] = React.useState([
    [
      {
        date: "December 31, 2019",
        description:
          "China informs the World Health Organization (WHO) about the patients having mysterious pneumonia. As per WHO, some patients were dealers or Vendors in the Huanan Seafood Market.",
        background: "rgb(33, 150, 243)"
      },
      {
        date: "January 7, 2020",
        description: "The strain was named novel coronavirus (nCoV).",
        background: "rgb(33, 150, 243)"
      },
      {
        date: "January 11, 2020",
        description:
          "First death by COVID-19. The 61-year old man in Wuhan died and was a regular customer to the Huanan Seafood Market.",
        background: "rgb(33, 150, 243)"
      },
      {
        date: "January 30, 2020",
        description:
          "WHO declared public-health emergency. India reports its first case of COVID-19 in Kerala.",
        background: "rgb(33, 150, 243)"
      }
    ],
    [
      {
        date: "February 2, 2020",
        description:
          "First death of COVID-19 patient outside China in Phillippines. India confirms its second case in Kerala.",
        background: "rgb(233, 30, 99)"
      },
      {
        date: "February 4, 2020",
        description:
          "Kerala government declared coronavirus as a state calamity after the confirmation of the third case.",
        background: "rgb(233, 30, 99)"
      },
      {
        date: "February 11, 2020",
        description:
          "WHO proposed an official name of the virus: COVID-19, an acronym for Coronavirus disease 2019.",
        background: "rgb(233, 30, 99)"
      },
      {
        date: "February 13, 2020",
        description:
          "Second COVID-19 patient from Kerala, India was discharged after recovering from the deadly disease.",
        background: "rgb(233, 30, 99)"
      }
    ],
    [
      {
        date: "March 10, 2020",
        description:
          "WHO declared COVID-19 as a pandemic. Trump blocks visitors from Europe.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 12, 2020",
        description: "First death was reported in India due to COVID-19.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 14, 2020",
        description:
          "India declared COVID-19 a notified disaster. India reports second death due to COVID-19 in Delhi.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 15, 2020",
        description:
          "The number of confirmed cases in India crossed the hundred mark. Maharashtra recorded the highest number of cases.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 16, 2020",
        description:
          "Central government India ordered all institutions, shopping malls, theatres, gyms to be shut until March 31.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 17, 2020",
        description: "India records third death due to COVID-19 in Mumbai.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 18, 2020",
        description: "CBSE exams were postponed in India.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 20, 2020",
        description:
          "WHO stated that although older people are the hardest hit, younger people are not spared. WHO launched Health Alert app on WhatsApp for COVID-19.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 22, 2020",
        description: "India observed Janta Curfew for a day.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 24, 2020",
        description:
          "Tokyo Olympics postponed for a year until 2021. Prime Minister Modi announced 21-day lockdown in India.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "March 28, 2020",
        description: "India made its first COVID-19 test kit.",
        background: "rgb(16, 204, 82)"
      }
    ],
    [
      {
        date: "April 5, 2020",
        description:
          "130 crore Indians in solidarity from 9:00 pm -9:09 pm by turning off lights and lighting diyas, candles torches and flashlights.",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "April 6, 2020",
        description:
          "Death toll in India crossed the hundred mark. WHO issued updated guidance on the usage of masks.",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "April 14, 2020",
        description: "PM Modi extended the 21-day lockdown to May 3.",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "April 22, 2020",
        description:
          "20,000 confirmed cases were reported as cases double every 7 days, even after one month of nationwide lockdown.",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "April 29, 2020",
        description: "1000 confirmed deaths were recorded."
      }
    ],
    [
      {
        date: "May 01, 2020",
        description:
          "The nationwide lockdown was further extended till May 17.",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "May 07, 2020",
        description: "50,000 confirmed cases were reported.",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "May 15, 2020",
        description: "India Records 100 COVID-19 Deaths in 24 Hours..",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "May 17, 2020",
        description:
          "Nationwide lockdown further extended till May 31, making it one of the longest lockdowns any country has imposed ever.",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "May 19, 2020",
        description:
          "Cases continue to increase as 100,000 confirmed cases were reported.India for the first time tested more than 100,000 samples (including the less reliable TrueNat and CB-NAAT) in 24 hours.",
        background: "rgb(61, 100, 200)"
      },
      {
        date: "May 31, 2020",
        description: "5000 confirmed deaths were recorded.",
        background: "rgb(61, 100, 200)"
      }
    ],
    [
      {
        date: "June 08, 2020",
        description:
          "Phased reopening begins after 75 days of lockdown, as India records more than 2,50,000 COVID-19 cases and 7200 deaths. At the start of the lockdown, India had reported only 606 cases and ten deaths.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "June 12, 2020",
        description: "More than 10,000 new cases were reported.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "June 17, 2020",
        description:
          "India registered the highest-ever spike of 2,003 COVID-19 deaths as Maharashtra and Delhi added 'backlog' fatalities to their data.",
        background: "rgb(16, 204, 82)"
      },
      {
        date: "June 27, 2020",
        description:
          "After reporting 100,000 cases on May 19, India adds 100,000 cases in 15, 10, 8 and 5 days respectively to bring the total number of cases to half a million.",
        background: "rgb(16, 204, 82)"
      }
    ],
    [
      {
        date: "Coming Soon",
        description:
          "We sincerely hope that one day we will be able to see our future, till then we'll just wait.",
        background: "rgb(33, 150, 243)"
      }
    ]
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="January" {...a11yProps(0)} />
          <Tab label="February" {...a11yProps(1)} />
          <Tab label="March" {...a11yProps(2)} />
          <Tab label="April" {...a11yProps(3)} />
          <Tab label="May" {...a11yProps(4)} />
          <Tab label="June" {...a11yProps(5)} />
          <Tab label="July" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Timeline data={data[0]} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Timeline data={data[1]} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Timeline data={data[2]} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Timeline data={data[3]} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Timeline data={data[4]} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Timeline data={data[5]} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Timeline data={data[6]} />
      </TabPanel>
    </div>
  );
}
