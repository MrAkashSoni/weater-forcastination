import axios from "axios";

export const getWeatherForecastData = async ({ location, days }) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`
  );
};

export const getWeatherHistoryData = async ({ location, date }) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/history.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&dt=${date}`
  );
};
