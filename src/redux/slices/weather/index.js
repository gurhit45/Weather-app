import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  reducers: {
    setWeather: (state, action) => {
      return action.payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
