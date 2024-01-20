import { createSlice } from "@reduxjs/toolkit";
import { addItem, removeItem } from "./cartActions";
import { ShoppingCartState, Product } from "../../interface/interface";

const initialState: ShoppingCartState = {
  items: [],
  isLoading: false,
  isError: null,
  isSuccess: false,
};

const cartSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    resetSuccess: (state) => {
      state.isSuccess = false;
    },
    resetState: (state) => {
      state.items = [];
      state.isLoading = false;
      state.isError = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItem.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";
        state.isSuccess = true;
        state.items = action.payload;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || "";
      })
      .addCase(removeItem.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";
        state.isSuccess = true;
        state.items = action.payload;
      })
      .addCase(removeItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || "";
      });
  },
});

export const { resetSuccess, resetState } = cartSlice.actions;
export default cartSlice.reducer;
