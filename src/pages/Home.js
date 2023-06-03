import { useEffect, useState } from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { getWeatherForecastData } from "../apiUtils/apiCalls";
import WeatherCard from "../components/WeatherCard";

// we can use states for these to make them dynamic
const days = 7;
const location = "new york";

const Home = () => {
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState({});

  // We can add a timer here to auto refresh the weather data
  const getWeatherData = async () => {
    const res = await getWeatherForecastData({ location, days });
    setWeatherData(res?.data);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <Container>
      {/* This button is just to give you an example of a navigation using react router dom */}
      <Button onClick={() => navigate("/demopage")}>Click to open a demo page</Button>

      <Box>
        <Typography>
          {" "}
          Current weather data of {weatherData?.location?.name}, {weatherData?.location?.country}
        </Typography>
        <Typography>
          {" "}
          Temperature (C): {weatherData?.current?.temp_c} / (F): {weatherData?.current?.temp_f}
        </Typography>
        <Typography> Wind direction: {weatherData?.current?.wind_dir}</Typography>
        <Typography>
          {" "}
          Wind speed (kph): {weatherData?.current?.wind_kph} / (mph): {weatherData?.current?.wind_mph}
        </Typography>
        <Typography> Humidity: {weatherData?.current?.humidity}</Typography>
        <br />
        <Typography variant="h6">7 Days data</Typography>

        {/* The card can be reusable to show the weather data for each day */}
        <Grid container spacing={2}>
          {weatherData?.forecast?.forecastday?.map((item, index) => (
            <Grid item key={index}>
              <WeatherCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
