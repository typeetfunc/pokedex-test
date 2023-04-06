import React from "react";
import { Meta } from "@storybook/react";
import { PokemonGrid, PokemonGridProps } from "./PokemonGrid";

export default {
  title: "PokemonsGrid",
  component: PokemonGrid,
} as Meta<PokemonGridProps>;

export const Primary = (props) => (
  <div style={{ height: "100vh" }}>
    <PokemonGrid {...props} />
  </div>
);

Primary.args = {
  pokemons: [
    {
      name: "charmander",
    },
    {
      name: "ivysaur",
    },
    {
      name: "bulbasaur",
    },
    {
      name: "pikachu",
    },
  ],
  loading: false,
  paginationModel: {
    page: 1,
    pageSize: 25,
  },
  total: 10,
};
