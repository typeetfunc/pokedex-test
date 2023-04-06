import { Pokemon } from "@pokedex/utils";

export type PokemonEntityList = Pokemon[];

export type PokemonEntityListApiRequest = {
  limit: number;
  offset: number;
};

export type PokemonEntityListApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonEntityList;
};
