export type PokemonEntity = {
  name: string;
  url: string;
};

export type PokemonEntityList = PokemonEntity[];

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

export type PokemonDetails = {
  name: string;
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
  sprites: {
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_femaly?: string;
  };
};
