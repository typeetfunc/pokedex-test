import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { INITIAL_GRID_SETTINGS } from "./constants";
import { PaginationModel } from "@pokedex/utils";

export const pokemonsGridSettingsSlice = createSlice({
  name: "pokemonsGridSettings",
  initialState: INITIAL_GRID_SETTINGS,
  reducers: {
    setPaginationModel: (state, action: PayloadAction<PaginationModel>) => ({
      ...state,
      paginationModel: action.payload,
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

export const { setPaginationModel } = pokemonsGridSettingsSlice.actions;
