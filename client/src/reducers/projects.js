import Cookies from "js-cookie";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  miscProjects: [],
  loadingProjects: false,
};

export const getProjects = createAsyncThunk("projects/getProjects", async (payload, { rejectWithValue }) => {
  const response = await fetch("/api/v1/project", {
    method: "GET",
  });
  if (!response.ok) {
    return rejectWithValue("rejected");
  }
  return response.json();
});

export const postProject = createAsyncThunk("projects/postProject", async (payload, { rejectWithValue }) => {
  const response = await fetch("/api/v1/project", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `JWT ${Cookies.get("JWT")}`,
    },
    body: payload,
  });
  if (!response.ok) {
    return rejectWithValue("rejected");
  }
  return response.json();
});

export const putProject = createAsyncThunk("projects/putProject", async (payload, { rejectWithValue }) => {
  const response = await fetch("/api/v1/project", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `JWT ${Cookies.get("JWT")}`,
    },
    body: payload,
  });
  if (!response.ok) {
    return rejectWithValue("rejected");
  }
  return response.json();
});

export const deleteProject = createAsyncThunk("projects/deleteProject", async (payload, { rejectWithValue }) => {
  const response = await fetch("/api/v1/project", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `JWT ${Cookies.get("JWT")}`,
    },
    body: payload,
  });
  if (!response.ok) {
    return rejectWithValue("rejected");
  }
  return response.json();
});

export const postImage = createAsyncThunk("projects/postImage", async (payload, { rejectWithValue }) => {
  const response = await fetch("/api/v1/aws", {
    method: "POST",
    headers: {
      Authorization: `JWT ${Cookies.get("JWT")}`,
    },
    body: payload,
  });
  if (!response.ok) {
    return rejectWithValue("rejected");
  }
  return response.json();
});

export const deleteImage = createAsyncThunk("projects/deleteImage", async (payload, { rejectWithValue }) => {
  const response = await fetch("/api/v1/aws", {
    method: "DELETE",
    headers: {
      Authorization: `JWT ${Cookies.get("JWT")}`,
    },
    body: payload,
  });
  if (!response.ok) {
    return rejectWithValue("rejected");
  }
  return response.json();
});

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProjects.pending, (state, action) => {
        state.loadingProjects = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loadingProjects = false;
        state.miscProjects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loadingProjects = false;
      })
      .addCase(postProject.fulfilled, (state, action) => {
        state.miscProjects.push(action.payload);
      })
      .addCase(putProject.fulfilled, (state, action) => {
        // action.payload = index
        state.miscProjects[action.payload] = action.payload;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        // action.payload = index
        state.splice(action.payload, 1);
      });
  },
});

export default projectsSlice.reducer;
