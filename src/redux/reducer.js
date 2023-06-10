import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return (state += 1);
    },
    decrement(state, action) {
      return (state -= 1);
    },
    addPage(state, action) {
      return (state += action.payload);
    },
  },
});
export const { increment, decrement, addPage } = counter.actions;
export default counter.reducer;
