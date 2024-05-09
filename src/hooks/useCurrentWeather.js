import { useEffect } from "react";
import useGeoLocation from "./useGeoLocation";
import { useDispatch, useSelector } from "react-redux";
import { setWeather } from "../redux/slices/weather";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function useCurrentWeather() {
  const location = useGeoLocation();
  const currentWeather = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchWeather() {
      if (location) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location?.longitude}&appid=${apiKey}&units=metric`
        );
        const weather = await response.json();
        dispatch(setWeather(weather))
      }
    }

    fetchWeather();
  }, [location]);

  return currentWeather;
}
