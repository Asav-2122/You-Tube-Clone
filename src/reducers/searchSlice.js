import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: {},
  },
  reducers: {
    cacheSearch: (state, action) => {
      state.value = {
        ...state.value,
        [action.payload.searchQuery]: action.payload.res,
      };
    },
  },
});

export const { cacheSearch } = searchSlice.actions;
export default searchSlice.reducer;
