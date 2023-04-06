export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonDetails = {
  name: string;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string };
  }>;
};

export type PaginationModel = {
  pageSize: number;
  page: number;
};
