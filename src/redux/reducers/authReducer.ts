import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login", // Changed to a more appropriate action type
  async (userCredentials) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/signin/`, userCredentials); // Added userCredentials to the request
    const data = response.data.data; // Correctly accessing the data
    localStorage.setItem("user", JSON.stringify(data));

    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Access Denied: Invalid credentials";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
