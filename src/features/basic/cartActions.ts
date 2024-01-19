import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../interface/interface";
import { RootState } from "@/lib/store";

export const addItem = createAsyncThunk(
  "cart/addItem",
  async (item: Product, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { items } = state.cart;
    const existingItem = items.find((i: Product) => i.id === item.id);
    if (!existingItem) {
      return [...items, item];
    } else {
      return items;
    }
  }
);

export const removeItem = createAsyncThunk(
  "cart/removeItem",
  async (item: Product, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { items } = state.cart;
    const existingItem = items.find((i: Product) => i.id === item.id);
    if (existingItem) {
      return items.filter((i: Product) => i.id !== item.id);
    } else {
      return items;
    }
  }
);
