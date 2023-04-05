import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { INITIAL_GRID_SETTINGS } from "./constants";

export const pokemonsGridSettingsSlice = createSlice({
  name: "pokemonsGridSettings",
  initialState: INITIAL_GRID_SETTINGS,
  reducers: {
    setPageSize: (state, action: PayloadAction<number>) => ({
      ...state,
      pageSize: action.payload,
    }),
    setPage: (state, action: PayloadAction<number>) => ({
      ...state,
      page: action.payload,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.system,
      };
    },
  },
});

export const { setPage, setPageSize } = pokemonsGridSettingsSlice.actions;
