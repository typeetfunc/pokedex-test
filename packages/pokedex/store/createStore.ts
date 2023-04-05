import { configureStore } from "@reduxjs/toolkit";

import { pokemonApi } from "./slices/pokemonApi";
import { pokemonsGridSettingsSlice } from "./slices/pokemonGridSettings";

export const createStore = () =>
  configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
      pokemonsGridSettings: pokemonsGridSettingsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
  });
