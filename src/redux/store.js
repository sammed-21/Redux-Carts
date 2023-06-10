import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducer";
const store = configureStore({
  reducer: {
    counter: counter,
  },
});
export default store;
