import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../reducers/searchSlice.js";
import sidebarSlice from "../reducers/sidebarSlice.js";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice,
  },
});

export default store;
