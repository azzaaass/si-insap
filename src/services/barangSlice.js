import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// BASE URL
const API_URL = "http://localhost:3000/barang";

// async thun untuk crud
export const fetchBarang = createAsyncThunk("barang/fetchBarang", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const barangSlice = createSlice({
  name: "barang",
  initialState: {
    barang: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBarang.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBarang.fulfilled, (state, action) => {
        state.status = "success";
        state.barang = action.payload;
      })
      .addCase(fetchBarang.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default barangSlice.reducer;
