import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../reducers/searchSlice.js";
import sidebarSlice from "../reducers/sidebarSlice.js";
import chatSlice from "../reducers/chatSlice.js";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice,
    chat : chatSlice,
  },
});

export default store;
