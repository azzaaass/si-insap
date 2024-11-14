import { configureStore } from "@reduxjs/toolkit";
import barangReducer from "../services/barangSlice";

export const store = configureStore({
    reducer: {
        barang: barangReducer,
    }
});