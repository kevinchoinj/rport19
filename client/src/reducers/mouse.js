import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mousePosition: {xValue: 0, yValue: 0},
};

export const mouseReducer = createSlice({
  name: "mouse",
  initialState,
  reducers: {
    setMousePosition: (state, action) => {
      state.mousePosition.xValue = action.payload.xValue;
      state.mousePosition.yValue = action.payload.yValue;
    },
  },
});

export const { setMousePosition } = mouseReducer.actions;

export default mouseReducer.reducer;
