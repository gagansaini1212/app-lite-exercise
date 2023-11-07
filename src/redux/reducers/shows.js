import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/api";

const initialState = {
  data: [],
  error: undefined,
  loading: false,
};

export const fetchShows = createAsyncThunk("search/shows", async () => {
  const response = await axios.get("/search/shows?q=spiderman");
  // console.log("response", response);
  return response;
});

export const shows = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchShows.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        // console.log("action", action);
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { removeProduct, resetProducts } = products.actions;
export default shows.reducer;
