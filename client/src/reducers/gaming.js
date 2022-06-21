import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
};

export const gamingReducer = createSlice({
  name: "gaming",
  initialState,
  reducers: {
    setLightboxImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setLightboxImage } = gamingReducer.actions;

export default gamingReducer.reducer;
