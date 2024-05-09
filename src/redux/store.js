import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weather";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
