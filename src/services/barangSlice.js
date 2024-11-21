import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// BASE URL
const API_URL = "http://localhost:3000/barang";

// async thun untuk crud
export const fetchBarang = createAsyncThunk("barang/fetchBarang", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// export const addBarang = createAsyncThunk("barang/addBarang", async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

export const updateBarang = createAsyncThunk("barang/updateBarang", async (updatedBarang) => {
  const { id } = updatedBarang;
  const response = await axios.put(`${API_URL}/${id}`, updatedBarang);
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
        state.status = "succeeded";
        state.barang = action.payload;
      })
      .addCase(fetchBarang.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateBarang.fulfilled, (state, action) => {
        const index = state.barang.findIndex((barang) => barang.id === action.payload.id);
        if (index !== -1) {
          state.barang[index] = action.payload;
        }
      });
  },
});

export default barangSlice.reducer;
