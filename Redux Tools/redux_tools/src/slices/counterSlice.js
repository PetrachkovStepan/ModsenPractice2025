import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    makeZero: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, makeZero } = counterSlice.actions;

export default counterSlice.reducer;
