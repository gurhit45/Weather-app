import {
  Box,
  Container,
  TextField,
  Typography,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import BG from "../assets/bg.jpg";
import useCurrentWeather from "../hooks/useCurrentWeather";
import { useDispatch } from "react-redux";
import { setWeather } from "../redux/slices/weather";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Item = styled(Paper)({
  padding: "16px",
  flexGrow: 1,
  flexBasis: "25%",
});
const PreTitle = styled(Typography)({
  fontSize: "12px",
});

const handleSubmit = async (e, cityName, dispatch) => {
  e.preventDefault();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  );
  const weather = await response.json();
  dispatch(setWeather(weather));
};

function Dashboard() {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");
  const currentWeather = useCurrentWeather();
  const weatherCode = currentWeather?.weather?.[0]?.icon;

  let icon, iconDesc;
  if (weatherCode) {
    switch (weatherCode) {
      case "01d":
        icon = "01d";
        iconDesc = "clear sky";
        break;
      case "01n":
        icon = "01n";
        iconDesc = "clear sky";
        break;
      case "02d":
        icon = "02d";
        iconDesc = "few clouds";
        break;
      case "02n":
        icon = "02n";
        iconDesc = "few clouds";
        break;
      case "03d":
        icon = "03d";
        iconDesc = "scattered clouds";
        break;
      case "03n":
        icon = "03n";
        iconDesc = "scattered clouds";
        break;
      case "04d":
        icon = "04d";
        iconDesc = "broken clouds";
        break;
      case "04n":
        icon = "04n";
        iconDesc = "broken clouds";
        break;
      case "09d":
        icon = "09d";
        iconDesc = "shower rain";
        break;
      case "09n":
        icon = "09n";
        iconDesc = "shower rain";
        break;
      case "10d":
        icon = "10d";
        iconDesc = "rain";
        break;
      case "10n":
        icon = "10n";
        iconDesc = "rain";
        break;
      case "11d":
        icon = "11d";
        iconDesc = "thunderstorm";
        break;
      case "11n":
        icon = "11n";
        iconDesc = "thunderstorm";
        break;
      case "13d":
        icon = "13d";
        iconDesc = "snow";
        break;
      case "13n":
        icon = "13n";
        iconDesc = "snow";
        break;
      case "50d":
        icon = "50d";
        iconDesc = "mist";
        break;
      case "50n":
        icon = "50n";
        iconDesc = "mist";
        break;
      default:
        icon = "02d";
        iconDesc = "few clouds";
    }
  }

  return (
    <>
      <Container maxWidth="sm">
        <Paper
          sx={{
            p: { xs: 2, md: 3 },
            backgroundImage: `url(${BG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Box mb={3}>
            <Paper
              component="form"
              onSubmit={(e) => handleSubmit(e, cityName, dispatch)}
              sx={{
                p: { xs: "0 14px", md: "4px 20px" },
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <TextField
                fullWidth
                id="searchCity"
                label="City Name"
                value={cityName}
                onChange={(event) => {
                  setCityName(event.target.value);
                }}
                variant="standard"
                sx={{ m: { xs: "0px 0 12px 0" } }}
                noValidate
                autoComplete="off"
              />
              <IconButton aria-label="delete" type="submit">
                <Search />
              </IconButton>
            </Paper>
            <Typography
              mb={1}
              color="#fff"
              sx={{ typography: { xs: "h5", md: "h4" } }}
            >
              {currentWeather?.name}, {currentWeather?.sys?.country}
            </Typography>
            <Typography
              variant="h2"
              color="#fff"
              sx={{ fontWeight: "500", typography: { xs: "h3", md: "h2" } }}
            >
              {currentWeather?.main?.temp}&deg;
            </Typography>
          </Box>
          <Box>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Item>
                <PreTitle>Description</PreTitle>
                <Stack useFlexGap direction="row" alignItems="center">
                  <Typography
                    sx={{ typography: { xs: "subtitle2", md: "h5" } }}
                  >
                    {iconDesc}
                  </Typography>
                  <img
                    src={`https://openweathermap.org/img/wn/${icon}.png`}
                    alt="Icon"
                    style={{ width: "35px", height: "35px" }}
                  />
                </Stack>
              </Item>
              <Item>
                <PreTitle>Temp. min</PreTitle>
                <Typography sx={{ typography: { xs: "subtitle2", md: "h5" } }}>
                  {currentWeather?.main?.temp_min}
                </Typography>
              </Item>
              <Item>
                <PreTitle>Temp. max</PreTitle>
                <Typography sx={{ typography: { xs: "subtitle2", md: "h5" } }}>
                  {currentWeather?.main?.temp_max}
                </Typography>
              </Item>
              <Item>
                <PreTitle>Pressure</PreTitle>
                <Typography sx={{ typography: { xs: "subtitle2", md: "h5" } }}>
                  {currentWeather?.main?.pressure}
                </Typography>
              </Item>
              <Item>
                <PreTitle>Humidity</PreTitle>
                <Typography sx={{ typography: { xs: "subtitle2", md: "h5" } }}>
                  {currentWeather?.main?.humidity}
                </Typography>
              </Item>
              <Item>
                <PreTitle>Visibility</PreTitle>
                <Typography sx={{ typography: { xs: "subtitle2", md: "h5" } }}>
                  {currentWeather?.visibility}
                </Typography>
              </Item>
              <Item>
                <PreTitle>Wind Speed</PreTitle>
                <Typography sx={{ typography: { xs: "subtitle2", md: "h5" } }}>
                  {currentWeather?.wind?.speed}
                </Typography>
              </Item>
              <Item>
                <PreTitle>Timezone</PreTitle>
                <Typography sx={{ typography: { xs: "subtitle2", md: "h5" } }}>
                  {currentWeather?.timezone}
                </Typography>
              </Item>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Dashboard;
