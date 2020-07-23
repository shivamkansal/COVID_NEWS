import axios from "axios";

export const fetchStateWise = async () => {
  const url = "https://api.covid19india.org/data.json";

  try {
    const {
      data: { statewise, cases_time_series, tested }
    } = await axios.get(url);

    return { statewise, cases_time_series, tested };
  } catch (error) {
    console.log(error.message);
  }
};
const url = "https://covid19.mathdro.id/api/countries/india";

export const fetchData = async country => {
  let changeableUrl = url;
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error.message);
  }
};

var config = {
  method: "get",
  url: "https://api.smartable.ai/coronavirus/news/IN",
  headers: {
    "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d"
  }
};

export const fetchNews = async () => {
  let changeableUrl = "https://api.smartable.ai/coronavirus/news/IN";
  try {
    const {
      data: { news }
    } = await axios.get(changeableUrl, {
      headers: {
        "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d"
      }
    });
    return { news };
  } catch (error) {
    console.log(error.message);
  }
  // axios(config)
  //   .then(function(response) {
  //     // console.log(response.data, "data");
  //     const data = response.data;
  //     // console.log(data, "data");
  //     return data;
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
};

// export const fetchNews = async () => {
// try {
//   const {
//     data: { news }
//   } = await axios.get(config);
//   console.log("hi");
//   return { news };
// } catch (error) {
//   console.log(error.message);
// }
// };
// export const fetchNews = async () => {
//   axios
//     .get("https://api.smartable.ai/coronavirus/news/IN", {
//       params: {
//         "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d"
//       }
//     })
//     .then(function(response) {
//       return response;
//     });
// };
