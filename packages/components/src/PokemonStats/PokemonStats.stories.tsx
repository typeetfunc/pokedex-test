import React from "react";
import { PokemonStats, PokemonStatsProps } from "./PokemonStats";
import { Meta } from "@storybook/react";

export default {
  title: "PokemonStats",
  component: PokemonStats,
} as Meta<PokemonStatsProps>;

export const Primary = (pokemonStatsProps) => (
  <div style={{ height: "100vh" }}>
    <PokemonStats {...pokemonStatsProps} />
  </div>
);

Primary.args = {
  name: "bulbasaur",
  stats: [
    {
      base_stat: 15,
      effort: 0,
      stat: {
        name: "hp",
      },
    },
    {
      base_stat: 15,
      effort: 0,
      stat: {
        name: "defense",
      },
    },
    {
      base_stat: 15,
      effort: 0,
      stat: {
        name: "attack",
      },
    },
    {
      base_stat: 15,
      effort: 0,
      stat: {
        name: "speed",
      },
    },
  ],
  loading: false,
};
