import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  formStatus: "none",
};

export const postContact = createAsyncThunk("contact/postContact", async (payload, { rejectWithValue }) => {
  const response = await fetch("/api/v1/email/contact", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: payload,
  });
  if (!response.ok) {
    return rejectWithValue("rejected");
  }
  return response.json();
});

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setFormStatus: (state, action) => {
      state.formStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postContact.pending, (state) => {
        state.formStatus = "sending";
      })
      .addCase(postContact.fulfilled, (state) => {
        state.formStatus = "success";
      })
      .addCase(postContact.rejected, (state) => {
        state.formStatus = "failure";
      });
  },
});

export const { setGithubToken } = contactSlice.actions;

export default contactSlice.reducer;
