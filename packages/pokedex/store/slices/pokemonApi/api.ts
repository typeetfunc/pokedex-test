import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { HYDRATE } from "next-redux-wrapper";

import {
  PokemonEntityListApiRequest,
  PokemonEntityListApiResponse,
} from "./types";
import { BASE_URL, POKEMON_ENDPOINT } from "./constants";
import { PokemonDetails } from "@pokedex/utils";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonDetails, string>({
      query: (name) => `/${POKEMON_ENDPOINT}/${name}`,
    }),
    getPokemons: builder.query<
      PokemonEntityListApiResponse,
      PokemonEntityListApiRequest
    >({
      query: (params) =>
        `/${POKEMON_ENDPOINT}?offset=${params.offset}&limit=${params.limit}`,
    }),
  }),
});
export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi;
